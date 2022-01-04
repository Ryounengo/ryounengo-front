import { Box, Heading, Text, View } from "native-base";
import { ICardSummary } from "@typings/interfaces";
import { useStyle } from "./style";
import { ECardFrontField } from "@typings/enums";
import CardIcon from "@static/images/card-nav.svg";

interface IParams {
    card: ICardSummary;
    fullView?: boolean;
}

export const CardSummary = (props: IParams) => {
    const { card, fullView } = props;
    const { back, example, front, toReview, reverseToReview } = card;
    const style = useStyle({ fullView: Boolean(fullView), toReview: toReview || reverseToReview });

    return (
        <View style={style.container}>
            <Box style={style.card}>
                <View style={[style.item, style.reviewLevelItem]}>
                    <Text style={style.reviewLevel}>R</Text>
                </View>
                <View style={[style.item, style.cardText]}>
                    <Text numberOfLines={1} style={style.text}>
                        {front[ECardFrontField.KANJI]}
                    </Text>
                    <Heading numberOfLines={1} style={style.text}>
                        {front[ECardFrontField.HIRAGANA]}
                    </Heading>
                    <Text numberOfLines={1} style={style.text}>
                        {back[0]}
                    </Text>
                </View>
                <View style={[style.item]}>{fullView && <Text style={style.example}>{example}</Text>}</View>
            </Box>
            <CardIcon height={style.cardIcon.height} style={style.cardIcon} width={style.cardIcon.width} />
        </View>
    );
};
