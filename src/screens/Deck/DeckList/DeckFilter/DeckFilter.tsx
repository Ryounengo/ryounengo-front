import { Accordion, IconButton, SearchIcon, Select, Stack, Text } from "native-base";
import { TextInput, SelectInput } from "@common";
import { useFilter } from "./useFilter";
import { useTranslation } from "react-i18next";
import { ALL_OPTIONS, NO_OPTION, YES_OPTION } from "../../../../constants";
import { tagsRegex } from "@utils/regex";
import { useStyle } from "@screens/Deck/DeckList/DeckFilter/styles";
import { IDeckFilter } from "@typings/interfaces";

interface IParams {
    setFilter(filter: IDeckFilter): void;
    isLoading: boolean;
    defaultValues?: IDeckFilter;
}

export const DeckFilter = (props: IParams) => {
    const { setFilter, isLoading, defaultValues } = props;
    const { t } = useTranslation(["deck", "validation"]);
    const { formMethods, submit } = useFilter(setFilter, defaultValues);
    const style = useStyle();
    const { control, handleSubmit, formState, clearErrors, setValue } = formMethods;
    const { errors } = formState;

    const privacyOptionList = [
        { label: t("yes"), value: YES_OPTION },
        { label: t("no"), value: NO_OPTION },
        { label: t("all"), value: ALL_OPTIONS },
    ];

    return (
        <Stack space={4} style={style.filters}>
            <TextInput
                clearError={clearErrors}
                control={control}
                error={errors.name}
                name="name"
                placeholder={t("deck:searchDeck")}
                prependedComponent={
                    <IconButton disabled={isLoading} icon={<SearchIcon />} onPress={handleSubmit(submit)} />
                }
                rules={{
                    minLength: { value: 3, message: t("validation:minLength", { count: 3 }) },
                    maxLength: { value: 50, message: t("validation:maxLength", { count: 50 }) },
                }}
                setValue={setValue}
            />
            <Accordion>
                <Accordion.Item>
                    <Accordion.Summary>
                        <Text fontSize="sm">{t("moreFilters")}</Text>
                    </Accordion.Summary>
                    <Accordion.Details>
                        <Stack space={"sm"}>
                            <SelectInput
                                control={control}
                                error={errors.isPrivate}
                                label={t("deck:isPrivate")}
                                name="isPrivate"
                            >
                                {privacyOptionList.map((option) => (
                                    <Select.Item
                                        key={option.value.toString()}
                                        label={option.label}
                                        value={option.value.toString()}
                                    />
                                ))}
                            </SelectInput>
                            <TextInput
                                clearError={clearErrors}
                                control={control}
                                error={errors.tags}
                                label={t("deck:tags")}
                                name="tags"
                                placeholder={t("deck:tagsExamples")}
                                rules={{
                                    pattern: { value: tagsRegex, message: t("wrongFormat") },
                                }}
                                setValue={setValue}
                            />
                        </Stack>
                    </Accordion.Details>
                </Accordion.Item>
            </Accordion>
        </Stack>
    );
};
