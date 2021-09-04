import { Button, VStack } from "native-base";
import { TextInput } from "../form";
import { textRegex } from "@utils/regex";
import { useTranslation } from "react-i18next";
import { ICardEditVersoForm } from "./ICardEdit";
import { ICard } from "@typings/interfaces";
import { useForm } from "react-hook-form";

interface IParams {
    submitVerso(formData: ICardEditVersoForm): void;
    card?: ICard;
    isLoading: boolean;
}

export const CardEditVersoForm = (props: IParams) => {
    const { card, submitVerso, isLoading } = props;
    const { t } = useTranslation(["common", "card", "validation"]);
    const { control, handleSubmit, formState } = useForm<ICardEditVersoForm>({
        defaultValues: {
            mainText: card?.back[0] ?? "",
            optionalText: card?.back[1] ?? "",
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
                error={errors.optionalText}
                label={t("card:optionalText")}
                name="optionalText"
                placeholder={t("card:optionalText")}
                rules={{
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <Button isLoading={isLoading} variant="outline" onPress={handleSubmit(submitVerso)}>
                {t("submit")}
            </Button>
        </VStack>
    );
};
