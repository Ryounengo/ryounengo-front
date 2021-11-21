import { useTranslation } from "react-i18next";
import { Button, VStack } from "native-base";
import { useLogin } from "./useLogin";
import { emailRegex } from "@utils/regex";
import { StackScreenProps } from "@react-navigation/stack";
import { TRootNavigation } from "@navigation/INavigation";
import { TextInput } from "@common/form";

type TParams = StackScreenProps<TRootNavigation, "login">;

export const Login = (props: TParams) => {
    const { navigation } = props;
    const { t } = useTranslation(["user", "common", "validation"]);
    const { isLoading, submit, formMethods } = useLogin();
    const { control, formState, handleSubmit } = formMethods;
    const { errors } = formState;

    const goToRegister = () => navigation.navigate("register");
    const goToLostPassword = () => navigation.navigate("lostPassword");

    return (
        <VStack alignItems="center" backgroundColor="grey" space={4}>
            <TextInput
                control={control}
                error={errors.email}
                isRequired
                label={t("user:email")}
                name="email"
                placeholder={t("user:email")}
                rules={{
                    pattern: { value: emailRegex, message: t("validation:emailError") },
                }}
            />
            <TextInput
                control={control}
                error={errors.password}
                isRequired
                label={t("user:password")}
                name="password"
                placeholder={t("user:password")}
                rules={{
                    minLength: { value: 6, message: t("validation:minLength", { count: 6 }) },
                }}
                type="text"
            />
            <Button isLoading={isLoading} variant="solid" onPress={handleSubmit(submit)}>
                {t("common:submit")}
            </Button>
            <Button variant="link" onPress={goToRegister}>
                {t("user:register")}
            </Button>
            <Button variant="link" onPress={goToLostPassword}>
                {t("user:lostPassword")}
            </Button>
        </VStack>
    );
};
