import { View } from "native-base";
import { ICardSummary } from "@typings/interfaces";
import { useStyle } from "@screens/Card/CardList/CardList/styles";
import { NoResult } from "@common/NoResult/NoResult";
import { CardDetails } from "@screens/Card/CardList/CardList/CardDetails";

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
                    <CardDetails card={card} key={card.id} />
                ))}
            </View>
            {cardList?.length === 0 && <NoResult />}
        </View>
    );
};
