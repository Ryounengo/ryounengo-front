import { useForm } from "react-hook-form";
import { useToast } from "native-base";
import { useTranslation } from "react-i18next";
import { LOGIN_ROUTE } from "../../../routes";
import { IError, useAuthentication, useFetch } from "../../../common";
import { ILoginForm } from "./ILogin";
import { ITokenResponse, responseToState, stateToRequest } from "../../../mappers/postLoginMapper";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export const useLogin = () => {
    const formMethods = useForm<ILoginForm>({
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const { login } = useAuthentication();
    const [postLoginState, { post }] = useFetch();
    const toast = useToast();
    const { t } = useTranslation("common");
    const { setUser } = useContext(UserContext);

    const submit = (formData: ILoginForm) =>
        post<ITokenResponse>(LOGIN_ROUTE, { body: stateToRequest(formData), forwardError: true, isSecured: false })
            .then(async (response) => {
                if (response) {
                    const user = await login(responseToState(response));
                    setUser(user);
                }
            })
            .catch((error: IError) =>
                toast.show({
                    accessibilityLabel: t("error"),
                    title: t("error"),
                    status: "error",
                    description: error.message,
                })
            );

    return {
        formMethods,
        submit,
        postLoginState,
    };
};
