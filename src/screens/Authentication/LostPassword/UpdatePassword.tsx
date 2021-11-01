import { Button, VStack, Text } from "native-base";
import { useTranslation } from "react-i18next";
import { TextInput } from "@common";
import { useUpdatePassword } from "./useLUpdatePassword";
import { StackScreenProps } from "@react-navigation/stack";
import { TRootNavigation } from "@navigation/INavigation";
import { otpCodeRegex } from "@utils/regex";
type TParams = StackScreenProps<TRootNavigation, "updatePassword">;

export const UpdatePassword = (props: TParams) => {
    const { route } = props;
    const { email } = route.params;
    const { formMethods, submit, isLoading } = useUpdatePassword();
    const { handleSubmit, formState, control, watch } = formMethods;
    const { errors } = formState;
    const password = watch("password");
    const { t } = useTranslation(["user", "validation"]);

    return (
        <VStack>
            <Text>{t("emailSent", { email })}</Text>
            <Text>{t("updatePasswordExplanation")}</Text>
            <TextInput
                control={control}
                error={errors.code}
                isRequired
                label={t("user:code")}
                name="code"
                placeholder={t("user:code")}
                rules={{
                    pattern: { value: otpCodeRegex, message: t("validation:exactNumberLengthError", { count: 6 }) },
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
                type="password"
            />
            <TextInput
                control={control}
                error={errors.confirmation}
                isRequired
                label={t("user:confirmationPassword")}
                name="confirmation"
                placeholder={t("user:confirmationPassword")}
                rules={{
                    validate: (value) => password === value || t<string>("validation:samePasswordError"),
                }}
                type="password"
            />
            <Button isLoading={isLoading} onPress={handleSubmit(submit)}>
                {t("common:submit")}
            </Button>
        </VStack>
    );
};
