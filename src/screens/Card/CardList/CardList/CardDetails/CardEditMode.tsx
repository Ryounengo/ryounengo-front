import { Box, Stack, Text, View } from "native-base";
import CardIcon from "@static/images/card-nav.svg";
import { useStyle } from "./style";
import { ICardSummary } from "@typings/interfaces";

interface IParams {
    card: ICardSummary;
}

export const CardEditMode = (props: IParams) => {
    const { card } = props;
    const style = useStyle({ toReview: card.toReview });

    return (
        <View style={style.container}>
            <Box style={style.card}>
                <Stack space={4} style={[style.item, style.cardText]}>
                    <Text style={style.text}>test1</Text>
                    <Text style={style.text}>test2</Text>
                    <Text style={style.text}>test3</Text>
                </Stack>
                <View style={[style.item]} />
            </Box>
            <CardIcon height={style.cardIcon.height} style={style.cardIcon} width={style.cardIcon.width} />
        </View>
    );
};
