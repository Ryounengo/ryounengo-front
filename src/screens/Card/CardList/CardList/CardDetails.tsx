import { Pressable } from "native-base";
import { CardSummary } from "@common/Card/CardSummary/CardSummary";
import { ICard } from "@typings/interfaces";
import { useStyle } from "@screens/Card/CardList/CardList/styles";

interface IParams {
    card: ICard;
    setCardDetails(card?: ICard): void;
    setIsEditMode(isEditMode: boolean): void;
}

export const CardDetails = (props: IParams) => {
    const { card, setCardDetails, setIsEditMode } = props;
    const style = useStyle();

    return (
        <Pressable
            style={style.card}
            onLongPress={() => {
                setIsEditMode(true);
                setCardDetails(card);
            }}
            onPress={() => {
                setIsEditMode(false);
                setCardDetails(card);
            }}
        >
            <CardSummary card={card} />
        </Pressable>
    );
};
