import { Pressable, VStack } from "native-base";
import { DeckSummary } from "./DeckSummary";
import { IDeck } from "../IDeck";

interface IParams {
    deckList: IDeck[];
}

export const DeckList = (props: IParams) => {
    const { deckList } = props;

    return (
        <VStack space={4}>
            {deckList?.map((deck) => (
                // eslint-disable-next-line no-console
                <Pressable key={deck.id} onPress={() => console.log(`go to ${deck.id} ${deck.name} `)}>
                    <DeckSummary deck={deck} />
                </Pressable>
            ))}
        </VStack>
    );
};
