import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IError, useCustomToast, useFetch } from "@common";
import { IRegisterForm } from "./IRegister";
import { stateToRequest } from "@mappers/postRegisterMapper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TRootNavigation } from "@navigation/INavigation";
import { REGISTER_ROUTE } from "@routes";

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
    const [postRegisterState, { post }] = useFetch();
    const { toast, toastError } = useCustomToast();
    const { t } = useTranslation("user");

    const submit = (formData: IRegisterForm) =>
        post(REGISTER_ROUTE, { body: stateToRequest(formData), forwardError: true, isSecured: false })
            .then(() => {
                toast.show({ status: "success", description: t("user:successAccountCreation") });
                navigate("login");
            })
            .catch((error: IError) => toastError(error.message));

    return {
        formMethods,
        submit,
        postRegisterState,
    };
};
