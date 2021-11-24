import { Heading, Text, View } from "native-base";
import { IDeckSummary } from "@typings/interfaces";
import { useStyle } from "./styles";
import { useTranslation } from "react-i18next";

interface IParams {
    deck: IDeckSummary;
}

export const DeckSummary = (props: IParams) => {
    const { deck } = props;
    const style = useStyle();
    const { t } = useTranslation(["deck", "card"]);
    const { cards, name } = deck;

    return (
        <View style={style.container}>
            <View style={style.item}>
                <Text style={style.r}>R</Text>
            </View>
            <View style={style.item}>
                <Heading style={style.deckName}>{name}</Heading>
            </View>
            <View style={[style.item]}>
                <Text style={style.cards}>{`${cards.length} ${t("card:cards")}`}</Text>
            </View>
        </View>
    );
};
