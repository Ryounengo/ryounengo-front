import { Button, Select, Stack } from "native-base";
import { TextInput, SelectInput } from "@common";
import { IDeckFilter } from "../../IDeck";
import { useFilter } from "./useFilter";
import { useTranslation } from "react-i18next";
import { ALL_OPTIONS, NO_OPTION, YES_OPTION } from "../../../../constants";
import { tagsRegex } from "@utils/regex";

interface IParams {
    setFilter(filter: IDeckFilter): void;
    isLoading: boolean;
}

export const DeckFilter = (props: IParams) => {
    const { setFilter, isLoading } = props;
    const { t } = useTranslation(["deck", "validation"]);
    const { formMethods, submit, clearForm } = useFilter(setFilter);
    const { control, handleSubmit, formState } = formMethods;
    const { errors } = formState;

    const privacyOptionList = [
        { label: t("yes"), value: YES_OPTION },
        { label: t("no"), value: NO_OPTION },
        { label: t("all"), value: ALL_OPTIONS },
    ];

    return (
        <Stack>
            <TextInput
                control={control}
                error={errors.name}
                label={t("deck:name")}
                name="name"
                placeholder={t("deck:name")}
                rules={{
                    minLength: { value: 3, message: t("validation:minLength", { count: 3 }) },
                    maxLength: { value: 50, message: t("validation:maxLength", { count: 50 }) },
                }}
            />
            <SelectInput control={control} error={errors.isPrivate} label={t("deck:isPrivate")} name="isPrivate">
                {privacyOptionList.map((option) => (
                    <Select.Item key={option.value.toString()} label={option.label} value={option.value.toString()} />
                ))}
            </SelectInput>
            <TextInput
                control={control}
                error={errors.tags}
                label={t("deck:tags")}
                name="tags"
                placeholder={t("deck:tagsExamples")}
                rules={{
                    pattern: { value: tagsRegex, message: t("wrongFormat") },
                }}
            />
            <Button isLoading={isLoading} onPress={handleSubmit(submit)}>
                {t("submit")}
            </Button>
            <Button variant="outline" onPress={clearForm}>
                {t("clearAll")}
            </Button>
        </Stack>
    );
};
