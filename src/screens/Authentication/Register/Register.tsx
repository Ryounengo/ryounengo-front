import { useTranslation } from "react-i18next";
import { Button, VStack } from "native-base";
import { TextInput } from "../../../common";
import { emailRegex, textRegex } from "../../../utils/regex";
import { useRegister } from "./useRegister";
import { StackScreenProps } from "@react-navigation/stack";
import { TRootNavigation } from "../../../navigation/INavigation";

type TParams = StackScreenProps<TRootNavigation, "register">;

export const Register = (props: TParams) => {
    const { navigation } = props;
    const { t } = useTranslation(["user", "common", "validation"]);
    const { postRegisterState, submit, formMethods } = useRegister();
    const { control, formState, handleSubmit } = formMethods;
    const { errors } = formState;

    const goToLogin = () => navigation.navigate("login");

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
                error={errors.username}
                isRequired
                label={t("user:username")}
                name="username"
                placeholder={t("user:username")}
                rules={{
                    maxLength: { value: 50, message: t("validation:maxLength", { count: 50 }) },
                    pattern: { value: textRegex, message: "validation:textError" },
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
            <Button isLoading={postRegisterState.isLoading} variant="outline" onPress={handleSubmit(submit)}>
                {t("common:submit")}
            </Button>
            <Button variant="link" onPress={goToLogin}>
                {t("user:login")}
            </Button>
        </VStack>
    );
};
