import { useForm } from "react-hook-form";
import { LOGIN_ROUTE } from "@routes";
import { ILoginForm } from "./ILogin";
import { ITokenResponse, responseToState, stateToRequest } from "@mappers/postLoginMapper";
import { useContext } from "react";
import { UserContext } from "@context";
import { getToken, getUser, setToken } from "@utils/authUtils";
import { usePostApi } from "@hooks/api";
import { useCustomToast } from "@hooks/useCustomToast";

export const useLogin = () => {
    const formMethods = useForm<ILoginForm>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { isLoading, update } = usePostApi<ITokenResponse>();
    const { toastError } = useCustomToast();
    const { setUser } = useContext(UserContext);

    const submit = (formData: ILoginForm) =>
        update(LOGIN_ROUTE, stateToRequest(formData))
            .then(async (response) => {
                if (response) {
                    await setToken(responseToState(response));

                    const token = await getToken();
                    if (token) {
                        const user = getUser(token);
                        setUser(user);
                    }
                }
            })
            .catch((error) => toastError(error.message));

    return {
        formMethods,
        submit,
        isLoading,
    };
};
