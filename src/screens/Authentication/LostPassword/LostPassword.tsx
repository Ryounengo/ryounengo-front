import { Button, VStack } from "native-base";
import { useLostPassword } from "./useLostPassword";
import { useTranslation } from "react-i18next";
import { TextInput } from "@common";
import { emailRegex } from "@utils/regex";

export const LostPassword = () => {
    const { formMethods, submit, isLoading } = useLostPassword();
    const { handleSubmit, formState, control } = formMethods;
    const { errors } = formState;
    const { t } = useTranslation(["user", "validation"]);

    return (
        <VStack>
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
            <Button isLoading={isLoading} onPress={handleSubmit(submit)}>
                {t("common:submit")}
            </Button>
        </VStack>
    );
};
