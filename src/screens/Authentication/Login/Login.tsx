import { useTranslation } from "react-i18next";
import { Button, VStack } from "native-base";
import { TextInput } from "../../../common";
import { useLogin } from "./useLogin";
import { emailRegex } from "../../../utils/regex";

export const Login = () => {
    const { t } = useTranslation(["user", "common"]);
    const { postLoginState, submit, formMethods } = useLogin();
    const { control, formState, handleSubmit } = formMethods;
    const { errors } = formState;

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
            />
            <Button isLoading={postLoginState.isLoading} variant="outline" onPress={handleSubmit(submit)}>
                {t("common:submit")}
            </Button>
        </VStack>
    );
};
