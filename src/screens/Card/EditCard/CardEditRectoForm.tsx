import { Button, VStack } from "native-base";
import { TextInput } from "@common/form";
import { textRegex } from "@utils/regex";
import { useTranslation } from "react-i18next";
import { ICardEditForm } from "@screens/Card/EditCard/ICardEdit";
import { useFormContext } from "react-hook-form";

interface IParams {
    submitRecto(): void;
}

export const CardEditRectoForm = (props: IParams) => {
    const { submitRecto } = props;
    const { t } = useTranslation(["common", "card", "validation"]);
    const { formState, control } = useFormContext<ICardEditForm>();
    const { errors } = formState;

    return (
        <VStack>
            <TextInput
                control={control}
                error={errors.front?.mainText}
                isRequired
                label={t("card:mainText")}
                name="front.mainText"
                placeholder={t("card:mainText")}
                rules={{
                    required: t<string>("validation:required"),
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <TextInput
                control={control}
                error={errors.front?.secondaryText}
                label={t("card:secondaryText")}
                name="front.secondaryText"
                placeholder={t("card:secondaryText")}
                rules={{
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <TextInput
                control={control}
                error={errors.front?.optionalText}
                label={t("card:optionalText")}
                name="front.optionalText"
                placeholder={t("card:optionalText")}
                rules={{
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <TextInput
                control={control}
                error={errors.front?.exampleText}
                label={t("card:exampleText")}
                name="front.exampleText"
                placeholder={t("card:exampleText")}
                rules={{
                    maxLength: { value: 250, message: t("validation:maxLength", { count: 250 }) },
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <Button variant="outline" onPress={submitRecto}>
                {t("submit")}
            </Button>
        </VStack>
    );
};
