import { Box, Heading, Stack, Text, View } from "native-base";
import { ECardFrontField } from "@typings/enums";
import CardIcon from "@static/images/card-nav.svg";
import { useStyle } from "./style";
import { ICard } from "@typings/interfaces";
import { getColoredExample } from "@utils/cardUtils";

interface IParams {
    card: ICard;
}

export const CardFront = (props: IParams) => {
    const { card } = props;
    const { front, example, toReview } = card;
    const style = useStyle({ toReview });

    return (
        <View style={style.container}>
            <Box style={style.card}>
                <View style={[style.item, style.reviewLevelItem]}>
                    <Text style={style.reviewLevel}>R</Text>
                </View>
                <Stack space={4} style={[style.item, style.cardText]}>
                    <Text numberOfLines={1} style={[style.text, style.kanji]}>
                        {front[ECardFrontField.KANJI]}
                    </Text>
                    <Heading numberOfLines={1} style={[style.text, style.hiragana]}>
                        {front[ECardFrontField.HIRAGANA]}
                    </Heading>
                    <Heading numberOfLines={1} style={[style.text, style.roumaji]}>
                        {front[ECardFrontField.ROUMAJI]}
                    </Heading>
                </Stack>
                <View style={[style.item]}>
                    <Text style={style.example}>{getColoredExample(example, front)}</Text>
                </View>
            </Box>
            <View style={style.cardBackground} />
            <CardIcon height={style.cardIcon.height} style={style.cardIcon} width={style.cardIcon.width} />
        </View>
    );
};
