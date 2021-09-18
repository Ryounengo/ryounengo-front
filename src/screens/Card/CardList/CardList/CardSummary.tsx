import { Box, Center, Heading } from "native-base";
import { ICardSummary } from "@typings/interfaces";
import { useStyle } from "@screens/Card/CardList/CardList/styles";

interface IParams {
    card: ICardSummary;
}

export const CardSummary = (props: IParams) => {
    const { card } = props;
    const style = useStyle();

    return (
        <Box style={style.card}>
            <Center>
                <Heading bold>{card.front[0]}</Heading>
                <Heading fontSize="xl">{card.back[0]}</Heading>
            </Center>
        </Box>
    );
};
