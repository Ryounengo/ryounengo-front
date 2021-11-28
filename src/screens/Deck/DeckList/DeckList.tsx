import { Pressable, View } from "native-base";
import { IDeckSummary } from "@typings/interfaces";
import { useStyle } from "./styles";
import { DeckSummary } from "@common/Deck/Summary/DeckSummary";
import { NoResult } from "@common/NoResult/NoResult";

interface IParams {
    deckList: IDeckSummary[];
    goToDetails(deckId: string): void;
}

export const DeckList = (props: IParams) => {
    const { deckList, goToDetails } = props;
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
            {deckList?.length === 0 && <NoResult />}
        </View>
    );
};
