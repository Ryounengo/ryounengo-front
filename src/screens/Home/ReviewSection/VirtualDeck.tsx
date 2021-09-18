import { Box, Heading, Text } from "native-base";
import { IVirtualDeck } from "@typings/interfaces";

interface IParams {
    virtualDeck: IVirtualDeck;
}

export const VirtualDeck = (props: IParams) => {
    const { virtualDeck } = props;

    return (
        <Box>
            <Heading>Cards to review</Heading>
            <Box>
                <Text>Tags: {virtualDeck.tags.join(", ")}</Text>
                <Text>Nb of cards: {virtualDeck.cards.length}</Text>
            </Box>
        </Box>
    );
};
