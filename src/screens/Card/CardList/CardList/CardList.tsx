import { Modal, Pressable, View } from "native-base";
import { ICard, ICardSummary } from "@typings/interfaces";
import { useStyle } from "@screens/Card/CardList/CardList/styles";
import { NoResult } from "@common/NoResult/NoResult";
import { CardDetails } from "@screens/Card/CardList/CardList/CardDetails";
import { Animated, GestureResponderEvent } from "react-native";
import { CardFront } from "@screens/Card/CardList/CardList/CardDetails/CardFront";
import { CardBack } from "@screens/Card/CardList/CardList/CardDetails/CardBack";
import { useState } from "react";
import { useFlipAnimation } from "@hooks/Card/useFlipAnimation";
import { CardEditMode } from "@screens/Card/CardList/CardList/CardDetails/CardEditMode";

interface IParams {
    cardList?: ICardSummary[];
}

export const CardList = (props: IParams) => {
    const { cardList } = props;
    const style = useStyle();
    const [cardDetails, setCardDetails] = useState<ICard>();
    const [isEditMode, setIsEditMode] = useState(false);
    const { flipToFrontStyle, flipToBackStyle, flipCard } = useFlipAnimation(cardDetails);

    const displayOptions = (event: GestureResponderEvent) => {
        event.preventDefault();
        flipCard();
        setIsEditMode(true);
    };

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
                        onLongPress={displayOptions}
                        onPress={flipCard}
                        onTouchMove={() => setCardDetails(undefined)}
                    >
                        <Animated.View style={[style.cardFront, flipToFrontStyle]}>
                            <CardFront card={cardDetails} />
                        </Animated.View>
                        <Animated.View style={[style.cardBack, flipToBackStyle]}>
                            {!isEditMode && <CardBack card={cardDetails} />}
                            {isEditMode && (
                                <Pressable
                                    onPress={() => {
                                        flipCard();
                                        setIsEditMode(false);
                                    }}
                                >
                                    <CardEditMode card={cardDetails} />
                                </Pressable>
                            )}
                        </Animated.View>
                    </Pressable>
                )}
            </Modal>
        </View>
    );
};
