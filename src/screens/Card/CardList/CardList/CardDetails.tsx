import { Pressable } from "native-base";
import { CardSummary } from "@common/Card/CardSummary/CardSummary";
import { ICard, ICardSummary } from "@typings/interfaces";
import { useStyle } from "@screens/Card/CardList/CardList/styles";

interface IParams {
    card: ICardSummary;
    setCardDetails(card?: ICard): void;
}

export const CardDetails = (props: IParams) => {
    const { card, setCardDetails } = props;
    const style = useStyle();

    return (
        <Pressable style={style.card} onPress={() => setCardDetails(card)}>
            <CardSummary card={card} />
        </Pressable>
    );
};
