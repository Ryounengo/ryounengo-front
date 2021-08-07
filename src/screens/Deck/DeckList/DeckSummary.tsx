import { Box, Text } from "native-base";
import { IDeck } from "../IDeck";

interface IParams {
    deck: IDeck;
}

export const DeckSummary = (props: IParams) => {
    const { deck } = props;
    const { cards, description, isPrivate, modelType, tags, name } = deck;

    return (
        <Box>
            <Text>Name: {name}</Text>
            <Text>description: {description}</Text>
            <Text>Private: {isPrivate ? "yes" : "no"}</Text>
            <Text>Type: {modelType}</Text>
            <Text>Tags: {tags.join(", ")}</Text>
            <Text>Nb of cards: {cards.length}</Text>
        </Box>
    );
};
