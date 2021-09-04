import { Box, Center, Heading, Text } from "native-base";
import { ICardSummary } from "@typings/interfaces";

interface IParams {
    card: ICardSummary;
}

export const CardSummary = (props: IParams) => {
    const { card } = props;

    return (
        <Box backgroundColor="lightgrey">
            <Center>
                <Heading bold>{card.front[0]}</Heading>
                <Heading fontSize="xl">{card.back[0]}</Heading>
            </Center>
            <Text fontSize="md" marginTop={2}>
                example: {card.example}
            </Text>
        </Box>
    );
};
