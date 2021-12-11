import { Pressable, View } from "native-base";
import { ICardSummary } from "@typings/interfaces";
import { useStyle } from "@screens/Card/CardList/CardList/styles";
import { CardSummary } from "@common/Card/CardSummary/CardSummary";
import { NoResult } from "@common/NoResult/NoResult";

interface IParams {
    cardList?: ICardSummary[];
}

export const CardList = (props: IParams) => {
    const { cardList } = props;
    const style = useStyle();

    return (
        <View style={style.container}>
            <View style={style.cardList}>
                {cardList?.map((card) => (
                    <Pressable key={card.id} style={style.card}>
                        <CardSummary card={card} />
                    </Pressable>
                ))}
            </View>
            {cardList?.length === 0 && <NoResult />}
        </View>
    );
};
