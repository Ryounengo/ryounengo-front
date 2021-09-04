import { Heading, ScrollView, Text, VStack } from "native-base";
import { CardSummary } from "./CardSummary";
import { IDeck } from "@typings/interfaces";

interface IParams {
    deck: IDeck;
}

export const DeckDetailsView = (props: IParams) => {
    const { deck } = props;
    const { cards, isPrivate, modelType, tags, description, name } = deck;

    return (
        <ScrollView>
            <Text>Name: {name}</Text>
            <Text>description: {description}</Text>
            <Text>Private: {isPrivate ? "yes" : "no"}</Text>
            <Text>Type: {modelType}</Text>
            <Text>Tags: {tags.join(", ")}</Text>
            <Text>Nb of cards: {cards.length}</Text>
            <Heading>Cards</Heading>
            <VStack space={2}>
                {deck?.cards.map((card) => (
                    <CardSummary card={card} key={card.id} />
                ))}
            </VStack>
        </ScrollView>
    );
};
