import { useToast } from "native-base";
import { useTranslation } from "react-i18next";

export const useCustomToast = () => {
    const toast = useToast();
    const { t } = useTranslation("common");

    const toastError = (errorMessage: string) =>
        toast.show({
            accessibilityLabel: t("error"),
            title: t("error"),
            status: "error",
            description: errorMessage,
        });

    const toastSuccessCreation = (item: string) =>
        toast.show({ status: "success", description: t("successCreation", { item }) });

    const toastSuccessUpdate = (item: string) =>
        toast.show({ status: "success", description: t("successUpdate", { item }) });

    return {
        toastError,
        toastSuccessCreation,
        toastSuccessUpdate,
        toast,
    };
};
