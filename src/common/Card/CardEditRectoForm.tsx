import { Button, VStack } from "native-base";
import { TextInput } from "../form";
import { textRegex } from "@utils/regex";
import { useTranslation } from "react-i18next";
import { ICardEditRectoForm } from "./ICardEdit";
import { ICardSummary } from "@typings/interfaces";
import { useForm } from "react-hook-form";

interface IParams {
    submitRecto(formData: ICardEditRectoForm): void;
    card?: ICardSummary;
}

export const CardEditRectoForm = (props: IParams) => {
    const { card, submitRecto } = props;
    const { t } = useTranslation(["common", "card", "validation"]);
    const { control, handleSubmit, formState } = useForm<ICardEditRectoForm>({
        defaultValues: {
            mainText: card?.front[0] ?? "",
            secondaryText: card?.front[1] ?? "",
            optionalText: card?.front[2] ?? "",
            exampleText: card?.example ?? "",
        },
    });
    const { errors } = formState;

    return (
        <VStack>
            <TextInput
                control={control}
                error={errors.mainText}
                isRequired
                label={t("card:mainText")}
                name="mainText"
                placeholder={t("card:mainText")}
                rules={{
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <TextInput
                control={control}
                error={errors.secondaryText}
                label={t("card:secondaryText")}
                name="secondaryText"
                placeholder={t("card:secondaryText")}
                rules={{
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <TextInput
                control={control}
                error={errors.optionalText}
                label={t("card:optionalText")}
                name="optionalText"
                placeholder={t("card:optionalText")}
                rules={{
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <TextInput
                control={control}
                error={errors.exampleText}
                label={t("card:exampleText")}
                name="exampleText"
                placeholder={t("card:exampleText")}
                rules={{
                    maxLength: { value: 250, message: t("validation:maxLength", { count: 250 }) },
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <Button variant="outline" onPress={handleSubmit(submitRecto)}>
                {t("submit")}
            </Button>
        </VStack>
    );
};
