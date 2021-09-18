import { Pressable, Text, VStack } from "native-base";
import { DeckSummary } from "./DeckSummary";
import { useTranslation } from "react-i18next";
import { IDeckSummary } from "@typings/interfaces";
import { useStyle } from "./styles";

interface IParams {
    deckList: IDeckSummary[];
    goToDetails(deckId: string): void;
}

export const DeckList = (props: IParams) => {
    const { deckList, goToDetails } = props;
    const { t } = useTranslation("common");
    const style = useStyle();

    return (
        <VStack space={4} style={style.deckList}>
            {deckList?.map((deck) => (
                <Pressable key={deck.id} onPress={() => goToDetails(deck.id)}>
                    <DeckSummary deck={deck} />
                </Pressable>
            ))}
            {deckList?.length === 0 && <Text>{t("noResults")}</Text>}
        </VStack>
    );
};
