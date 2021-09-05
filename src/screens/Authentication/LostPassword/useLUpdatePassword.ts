import { useForm } from "react-hook-form";
import { IUpdatePasswordForm } from "./IILostPassword";
import { IError, useCustomToast, useFetch } from "@common";
import { useNavigation } from "@react-navigation/native";
import { UPDATE_PASSWORD_ROUTE } from "@routes";
import { stateToRequest } from "@mappers/postUpdatePasswordMapper";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TRootNavigation } from "@navigation/INavigation";

type NavigationProps = NativeStackNavigationProp<TRootNavigation, "updatePassword">;

export const useUpdatePassword = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const [postUpdatePasswordState, { post }] = useFetch();
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
        post(UPDATE_PASSWORD_ROUTE, { body: payload, forwardError: true })
            .then(() => {
                navigate("login");
            })
            .catch((error: IError) => toastError(error.message));
    };

    return {
        formMethods,
        submit,
        postUpdatePasswordState,
    };
};
