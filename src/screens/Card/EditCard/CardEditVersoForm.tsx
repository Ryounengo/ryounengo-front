import { Button, VStack } from "native-base";
import { TextInput } from "@common/form";
import { textRegex } from "@utils/regex";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { ICardEditForm } from "@screens/Card/EditCard/ICardEdit";

interface IParams {
    submit(): void;
    isLoading: boolean;
}

export const CardEditVersoForm = (props: IParams) => {
    const { submit, isLoading } = props;
    const { t } = useTranslation(["common", "card", "validation"]);
    const { formState, control } = useFormContext<ICardEditForm>();
    const { errors } = formState;

    return (
        <VStack>
            <TextInput
                control={control}
                error={errors.back?.mainText}
                isRequired
                label={t("card:mainText")}
                name="back.mainText"
                placeholder={t("card:mainText")}
                rules={{
                    required: t<string>("validation:required"),
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <TextInput
                control={control}
                error={errors.back?.optionalText}
                label={t("card:optionalText")}
                name="back.optionalText"
                placeholder={t("card:optionalText")}
                rules={{
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <Button isLoading={isLoading} variant="outline" onPress={submit}>
                {t("submit")}
            </Button>
        </VStack>
    );
};
