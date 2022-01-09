import { Box, Heading, Stack, Text, View } from "native-base";
import CardIcon from "@static/images/card-nav.svg";
import { useStyle } from "./style";
import { ICard } from "@typings/interfaces";

interface IParams {
    card: ICard;
}

export const CardBack = (props: IParams) => {
    const { card } = props;
    const { back, toReview } = card;
    const style = useStyle({ toReview });

    return (
        <View style={style.container}>
            <Box style={style.card}>
                <View style={[style.item, style.reviewLevelItem]}>
                    <Text style={style.reviewLevel}>R</Text>
                </View>
                <Stack space={4} style={[style.item, style.cardText]}>
                    <Text numberOfLines={1} style={style.text}>
                        {back[0]}
                    </Text>
                    <Heading numberOfLines={1} style={style.text}>
                        {back[1]}
                    </Heading>
                </Stack>
                <View style={[style.item]} />
            </Box>
            <View style={style.cardBackground} />
            <CardIcon
                height={style.cardIcon.height}
                style={[style.cardIcon, style.rotate]}
                width={style.cardIcon.width}
            />
        </View>
    );
};
