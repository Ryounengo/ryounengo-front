import { Button, VStack } from "native-base";
import { CheckboxInput, TextInput } from "../form";
import { tagsRegex, textRegex } from "@utils/regex";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IDeckEditForm } from "@typings/interfaces";

interface IParams {
    formMethods: UseFormReturn<IDeckEditForm>;
    isLoading: boolean;
    submit(formData: IDeckEditForm): void;
}

export const DeckEditForm = (props: IParams) => {
    const { formMethods, isLoading, submit } = props;
    const { t } = useTranslation(["common", "deck", "validation"]);
    const { control, handleSubmit, formState } = formMethods;
    const { errors } = formState;

    return (
        <VStack>
            <TextInput
                control={control}
                error={errors.name}
                isRequired
                label={t("name")}
                name="name"
                placeholder={t("name")}
                rules={{
                    minLength: { value: 3, message: t("validation:minLength", { count: 3 }) },
                    maxLength: { value: 50, message: t("validation:maxLength", { count: 50 }) },
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <TextInput
                control={control}
                error={errors.description}
                label={t("description")}
                name="description"
                placeholder={t("description")}
                rules={{
                    minLength: { value: 3, message: t("validation:minLength", { count: 3 }) },
                    maxLength: { value: 150, message: t("validation:maxLength", { count: 150 }) },
                    pattern: { value: textRegex, message: "validation:textError" },
                }}
            />
            <TextInput
                control={control}
                error={errors.tags}
                label={t("deck:tags")}
                name="tags"
                placeholder={t("deck:tagsExamples")}
                rules={{
                    pattern: { value: tagsRegex, message: t("common:wrongFormat") },
                }}
            />
            <CheckboxInput control={control} error={errors.isPrivate} label={t("deck:isPrivate")} name="isPrivate" />
            <Button isLoading={isLoading} variant="outline" onPress={handleSubmit(submit)}>
                {t("submit")}
            </Button>
        </VStack>
    );
};
