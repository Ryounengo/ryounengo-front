import { Pressable, Text, View } from "native-base";
import { useTranslation } from "react-i18next";
import { IDeckSummary } from "@typings/interfaces";
import { useStyle } from "./styles";
import { DeckSummary } from "@common/Deck/Summary/DeckSummary";

interface IParams {
    deckList: IDeckSummary[];
    goToDetails(deckId: string): void;
}

export const DeckList = (props: IParams) => {
    const { deckList, goToDetails } = props;
    const { t } = useTranslation("common");
    const style = useStyle();

    return (
        <View style={style.container}>
            <View style={style.deckList}>
                {deckList.map((deck) => (
                    <Pressable key={deck.id} style={style.deck} onPress={() => goToDetails(deck.id)}>
                        <DeckSummary deck={deck} />
                    </Pressable>
                ))}
            </View>
            {deckList?.length === 0 && <Text>{t("noResults")}</Text>}
        </View>
    );
};
