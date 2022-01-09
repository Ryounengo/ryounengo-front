import { Box, Heading, Stack, Text, View } from "native-base";
import { ECardFrontField } from "@typings/enums";
import CardIcon from "@static/images/card-nav.svg";
import { useStyle } from "./style";
import { ICard } from "@typings/interfaces";

interface IParams {
    card: ICard;
    fullView?: boolean;
}

export const CardSummary = (props: IParams) => {
    const { card, fullView } = props;
    const { front, back, example, toReview } = card;
    const style = useStyle({ fullView: Boolean(fullView), toReview });

    return (
        <View style={style.container}>
            <Box style={style.card}>
                <View style={[style.item, style.reviewLevelItem]}>
                    <Text style={style.reviewLevel}>R</Text>
                </View>
                <Stack space={4} style={[style.item, style.cardText]}>
                    <Text numberOfLines={1} style={style.text}>
                        {front[ECardFrontField.KANJI]}
                    </Text>
                    <Heading numberOfLines={1} style={style.text}>
                        {front[ECardFrontField.HIRAGANA]}
                    </Heading>
                    <Text numberOfLines={1} style={style.text}>
                        {back[0]}
                    </Text>
                </Stack>
                <View style={[style.item]}>{fullView && <Text style={style.example}>{example}</Text>}</View>
            </Box>
            <CardIcon height={style.cardIcon.height} style={style.cardIcon} width={style.cardIcon.width} />
        </View>
    );
};
