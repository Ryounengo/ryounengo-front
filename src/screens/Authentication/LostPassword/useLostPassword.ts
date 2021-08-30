import { useForm } from "react-hook-form";
import { ILostPasswordForm } from "./IILostPassword";
import { useNavigation } from "@react-navigation/native";
import { useOTP, EOtpReason, IError } from "../../../common";
import { useToast } from "native-base";
import { useTranslation } from "react-i18next";

export const useLostPassword = () => {
    const { navigate } = useNavigation();
    const toast = useToast();
    const { t } = useTranslation();
    const { sendOTP, postSendOtpState } = useOTP();
    const formMethods = useForm<ILostPasswordForm>({
        defaultValues: {
            email: "",
        },
    });

    const submit = (formData: ILostPasswordForm) => {
        sendOTP(formData.email, EOtpReason.CHANGE_PASSWORD)
            .then(() => {
                navigate("updatePassword", { email: formData.email });
            })
            .catch((error: IError) =>
                toast.show({
                    accessibilityLabel: t("error"),
                    title: t("error"),
                    status: "error",
                    description: error.message,
                })
            );
    };

    return {
        formMethods,
        submit,
        postSendOtpState,
    };
};