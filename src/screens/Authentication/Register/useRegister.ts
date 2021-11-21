import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IRegisterForm } from "./IRegister";
import { stateToRequest } from "@mappers/postRegisterMapper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TRootNavigation } from "@navigation/INavigation";
import { REGISTER_ROUTE } from "@routes";
import { usePostApi } from "@hooks/api";
import { useCustomToast } from "@hooks/useCustomToast";

type NavigationProps = NativeStackNavigationProp<TRootNavigation, "register">;

export const useRegister = () => {
    const formMethods = useForm<IRegisterForm>({
        defaultValues: {
            email: "",
            username: "",
            password: "",
        },
    });
    const { navigate } = useNavigation<NavigationProps>();
    const { isLoading, update } = usePostApi();
    const { toast, toastError } = useCustomToast();
    const { t } = useTranslation("user");

    const submit = (formData: IRegisterForm) =>
        update(REGISTER_ROUTE, stateToRequest(formData))
            .then(() => {
                toast.show({ status: "success", description: t("user:successAccountCreation") });
                navigate("login");
            })
            .catch((error) => toastError(error.message));

    return {
        formMethods,
        submit,
        isLoading,
    };
};
