import { useForm } from "react-hook-form";
import { IUpdatePasswordForm } from "./IILostPassword";
import { IError, useFetch } from "../../../common";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "native-base";
import { useTranslation } from "react-i18next";
import { UPDATE_PASSWORD_ROUTE } from "../../../routes";
import { stateToRequest } from "../../../mappers/postUpdatePasswordMapper";

export const useUpdatePassword = () => {
    const { navigate } = useNavigation();
    const [postUpdatePasswordState, { post }] = useFetch();
    const toast = useToast();
    const { t } = useTranslation();
    const formMethods = useForm<IUpdatePasswordForm>({
        defaultValues: {
            code: "",
            password: "",
            confirmation: "",
        },
    });

    const submit = (formData: IUpdatePasswordForm) => {
        const payload = stateToRequest(formData);
        post(UPDATE_PASSWORD_ROUTE, { body: payload, forwardError: true })
            .then(() => {
                navigate("login");
            })
            .catch((error: IError) =>
                toast.show({
                    accessibilityLabel: t("common:error"),
                    title: t("common:error"),
                    status: "error",
                    description: error.message,
                })
            );
    };

    return {
        formMethods,
        submit,
        postUpdatePasswordState,
    };
};
