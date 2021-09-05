import { Box, Text } from "native-base";
import { IDeckSummary } from "@typings/interfaces";

interface IParams {
    deck: IDeckSummary;
}

export const DeckSummary = (props: IParams) => {
    const { deck } = props;
    const { cards, description, isPrivate, tags, name } = deck;

    return (
        <Box>
            <Text>Name: {name}</Text>
            <Text>description: {description}</Text>
            <Text>Private: {isPrivate ? "yes" : "no"}</Text>
            <Text>Tags: {tags.join(", ")}</Text>
            <Text>Nb of cards: {cards.length}</Text>
        </Box>
    );
};
