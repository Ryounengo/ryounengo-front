import { Box, Text } from "native-base";
import { IDeckSummary } from "@typings/interfaces";
import { DeckSummary } from "../../../common/Deck/DeckList/DeckSummary";

interface IParams {
    deck: IDeckSummary;
}

export const ReviewSection = (props: IParams) => {
    const { deck } = props;

    return (
        <Box>
            <Text>Cards to review</Text>
            <DeckSummary deck={deck} />
        </Box>
    );
};
