import { Heading, Text, useTheme, View } from "native-base";
import { IDeckSummary } from "@typings/interfaces";
import DeckCirclePattern from "@static/images/circle-card.svg";
import DeckLinesPattern from "@static/images/lines-card.svg";
import AddIcon from "@static/images/add.svg";
import PrivateIcon from "@static/images/private.svg";
import { useStyle } from "./styles";
import { useTranslation } from "react-i18next";
import { OutlinedIcon } from "@common/OutlinedIcon/OutlinedIcon";

interface IParams {
    deck: IDeckSummary;
}

export const DeckSummary = (props: IParams) => {
    const { deck } = props;
    const style = useStyle({ deckId: deck.id });
    const { colors } = useTheme();
    const { t } = useTranslation(["deck", "card"]);
    const { cards, name, isPrivate } = deck;
    const contrastColor = style.item.color;

    return (
        <View style={style.container}>
            <View style={[style.item, style.additionalInfo]}>
                <OutlinedIcon color={contrastColor ?? colors.white} icon={AddIcon} size={10} style={style.addReview} />
                <Text style={style.r}>R</Text>
                {isPrivate && <OutlinedIcon color={contrastColor ?? colors.white} icon={PrivateIcon} size={10} />}
            </View>
            <View style={style.item}>
                <Heading style={style.deckName}>{name}</Heading>
            </View>
            <View style={[style.item]}>
                <Text style={style.cards}>{t("card:cardsCounter", { count: cards })}</Text>
            </View>
            <DeckCirclePattern style={style.circlePattern} viewBox="40 -10 60 60" width="100%" />
            <DeckLinesPattern style={style.linesPattern} viewBox="-25 40 60 85" width="100%" />
        </View>
    );
};
