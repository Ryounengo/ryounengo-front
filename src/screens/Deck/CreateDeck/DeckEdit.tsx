import { Button, VStack } from "native-base";
import { TCreateDeckStackParams } from "./ICreateDeck";
import { StackScreenProps } from "@react-navigation/stack";
import { useCreateDeck } from "./useCreateDeck";
import { useTranslation } from "react-i18next";
import { TextInput } from "../../../common";
import { CheckboxField } from "../../../common/form/CheckboxField";
import { tagsRegex } from "../../../utils/regex";

type TParams = StackScreenProps<TCreateDeckStackParams, "deckEdit">;

export const DeckEdit = (props: TParams) => {
    const { route } = props;
    const { t } = useTranslation(["common", "deck", "validation"]);
    const { formMethods, submit, postCreateDeckState } = useCreateDeck(route.params.deckType);
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
            <CheckboxField control={control} error={errors.isPrivate} label={t("deck:isPrivate")} name="isPrivate" />
            <Button isLoading={postCreateDeckState.isLoading} variant="outline" onPress={handleSubmit(submit)}>
                {t("submit")}
            </Button>
        </VStack>
    );
};