import { Modal, Pressable, View } from "native-base";
import { ICard, ICardSummary } from "@typings/interfaces";
import { useStyle } from "@screens/Card/CardList/CardList/styles";
import { NoResult } from "@common/NoResult/NoResult";
import { CardDetails } from "@screens/Card/CardList/CardList/CardDetails";
import { Animated } from "react-native";
import { CardFront } from "@screens/Card/CardList/CardList/CardDetails/CardFront";
import { CardBack } from "@screens/Card/CardList/CardList/CardDetails/CardBack";
import { useState } from "react";
import { useFlipAnimation } from "@hooks/Card/useFlipAnimation";

interface IParams {
    cardList?: ICardSummary[];
}

export const CardList = (props: IParams) => {
    const { cardList } = props;
    const style = useStyle();
    const [cardDetails, setCardDetails] = useState<ICard>();
    const { flipToFrontStyle, flipToBackStyle, flipCard } = useFlipAnimation(cardDetails);

    return (
        <View style={style.container}>
            <View style={style.cardList}>
                {cardList?.map((card) => (
                    <CardDetails card={card} key={card.id} setCardDetails={setCardDetails} />
                ))}
            </View>
            {cardList?.length === 0 && <NoResult />}
            <Modal isOpen={Boolean(cardDetails)} onClose={() => setCardDetails(undefined)}>
                {cardDetails && (
                    <Pressable
                        style={style.cardDetail}
                        onPress={flipCard}
                        onTouchMove={() => setCardDetails(undefined)}
                    >
                        <Animated.View style={[style.cardFront, flipToFrontStyle]}>
                            <CardFront card={cardDetails} />
                        </Animated.View>
                        <Animated.View style={[style.cardBack, flipToBackStyle]}>
                            <CardBack card={cardDetails} />
                        </Animated.View>
                    </Pressable>
                )}
            </Modal>
        </View>
    );
};
