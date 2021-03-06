import { Box, Button, Heading, ScrollView, VStack } from "native-base";
import { TextInput } from "@common/form";
import { tagsRegex, textRegex } from "@utils/regex";
import { useTranslation } from "react-i18next";
import { useStyle } from "@screens/Deck/DeckEdit/style";
import { SwitchInput } from "@common/form/SwitchInput";
import { useDeckEdit } from "@screens/Deck/DeckEdit/useDeckEdit";
import { StackScreenProps } from "@react-navigation/stack";
import { TLoggedNavigation } from "@navigation/INavigation";
import { TextTypeCard } from "@common/Card/CardTypeCard/TextCard";

type TParams = StackScreenProps<TLoggedNavigation, "editDeck">;

export const DeckEdit = (props: TParams) => {
    const { route, navigation } = props;
    const { deck } = route.params;
    const { formMethods, submit, isLoading } = useDeckEdit(deck);
    const { t } = useTranslation(["common", "deck", "validation"]);
    const { control, handleSubmit, formState } = formMethods;
    const { errors } = formState;
    const style = useStyle();

    navigation.setOptions({
        title: t(deck ? "deck:updateDeck" : "deck:createDeck"),
    });

    return (
        <ScrollView>
            <VStack p={4}>
                <Heading mb={4}>{t("deck:deckInformation")}</Heading>
                <TextInput
                    control={control}
                    error={errors.name}
                    isRequired
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
                    name="description"
                    placeholder={t("description")}
                    rules={{
                        minLength: { value: 3, message: t("validation:minLength", { count: 3 }) },
                        maxLength: { value: 150, message: t("validation:maxLength", { count: 150 }) },
                        pattern: { value: textRegex, message: "validation:textError" },
                    }}
                />
                <SwitchInput
                    control={control}
                    disabled={deck && !deck.isPrivate}
                    error={errors.isPrivate}
                    label={t("deck:isPrivate")}
                    name="isPrivate"
                    style={style.privateSwitch}
                />
                <Heading marginY={8}>{t("deck:tags")}</Heading>
                <TextInput
                    control={control}
                    error={errors.tags}
                    name="tags"
                    placeholder={t("deck:tagsExamples")}
                    rules={{
                        pattern: { value: tagsRegex, message: t("common:wrongFormat") },
                    }}
                />
                <Heading marginY={8}>{t("deck:defaultValues")}</Heading>
                <SwitchInput
                    control={control}
                    error={errors.isPrivate}
                    label={t("deck:isReversed")}
                    name="defaultReviewReverseCard"
                />
                <Box mt={4}>
                    <TextTypeCard />
                </Box>
                <Button isLoading={isLoading} margin="auto" mt={8} width="50%" onPress={handleSubmit(submit)}>
                    {t(deck ? "deck:updateDeck" : "deck:createDeck")}
                </Button>
            </VStack>
        </ScrollView>
    );
};
