import { Box, Text } from "native-base";
import { ICard } from "@typings/interfaces";

interface IParams {
    cardReviewList: ICard[];
}

export const CardReviewList = (props: IParams) => {
    const { cardReviewList } = props;

    return (
        <Box>
            <Text>Nb of cards: {cardReviewList.length}</Text>
        </Box>
    );
};
