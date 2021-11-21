import { useForm } from "react-hook-form";
import { IUpdatePasswordForm } from "./IILostPassword";
import { useNavigation } from "@react-navigation/native";
import { UPDATE_PASSWORD_ROUTE } from "@routes";
import { stateToRequest } from "@mappers/postUpdatePasswordMapper";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TRootNavigation } from "@navigation/INavigation";
import { usePostApi } from "@hooks/api";
import { useCustomToast } from "@hooks/useCustomToast";

type NavigationProps = NativeStackNavigationProp<TRootNavigation, "updatePassword">;

export const useUpdatePassword = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const { isLoading, update } = usePostApi();
    const { toastError } = useCustomToast();
    const formMethods = useForm<IUpdatePasswordForm>({
        defaultValues: {
            code: "",
            password: "",
            confirmation: "",
        },
    });

    const submit = (formData: IUpdatePasswordForm) => {
        const payload = stateToRequest(formData);
        update(UPDATE_PASSWORD_ROUTE, payload)
            .then(() => {
                navigate("login");
            })
            .catch((error) => toastError(error.message));
    };

    return {
        formMethods,
        submit,
        isLoading,
    };
};
