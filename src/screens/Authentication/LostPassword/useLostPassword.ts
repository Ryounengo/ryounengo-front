import { useForm } from "react-hook-form";
import { ILostPasswordForm } from "./IILostPassword";
import { useNavigation } from "@react-navigation/native";
import { useOTP, EOtpReason, useCustomToast } from "@common";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TRootNavigation } from "@navigation/INavigation";

type NavigationProps = NativeStackNavigationProp<TRootNavigation, "lostPassword">;

export const useLostPassword = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const { toastError } = useCustomToast();
    const { sendOTP, isLoading } = useOTP();
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
            .catch((error) => toastError(error.message));
    };

    return {
        formMethods,
        submit,
        isLoading,
    };
};
