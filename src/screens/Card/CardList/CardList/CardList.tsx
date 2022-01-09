import { Modal, Pressable, View } from "native-base";
import { ICard } from "@typings/interfaces";
import { useStyle } from "@screens/Card/CardList/CardList/styles";
import { NoResult } from "@common/NoResult/NoResult";
import { CardDetails } from "@screens/Card/CardList/CardList/CardDetails";
import { Animated } from "react-native";
import { CardFront } from "@screens/Card/CardList/CardList/CardDetails/CardFront";
import { CardBack } from "@screens/Card/CardList/CardList/CardDetails/CardBack";
import { useState } from "react";
import { useFlipAnimation } from "@hooks/Card/useFlipAnimation";
import { CardEditMode } from "@screens/Card/CardList/CardList/CardDetails/CardEditMode";

interface IParams {
    cardList?: ICard[];
    refresh(): void;
}

export const CardList = (props: IParams) => {
    const { cardList, refresh } = props;
    const style = useStyle();
    const [cardDetails, setCardDetails] = useState<ICard>();
    const [isEditMode, setIsEditMode] = useState(false);
    const { flipToFrontStyle, flipToBackStyle, flipCard } = useFlipAnimation(cardDetails);

    return (
        <View style={style.container}>
            <View style={style.cardList}>
                {cardList?.map((card) => (
                    <CardDetails
                        card={card}
                        key={card.id}
                        setCardDetails={setCardDetails}
                        setIsEditMode={setIsEditMode}
                    />
                ))}
            </View>
            {cardList?.length === 0 && <NoResult />}
            <Modal isOpen={Boolean(cardDetails)} onClose={() => setCardDetails(undefined)}>
                {cardDetails && !isEditMode && (
                    <Pressable style={style.cardDetail} onPress={flipCard}>
                        <Animated.View style={[style.cardFront, flipToFrontStyle]}>
                            <CardFront card={cardDetails} />
                        </Animated.View>
                        <Animated.View style={[style.cardBack, flipToBackStyle]}>
                            <CardBack card={cardDetails} />
                        </Animated.View>
                    </Pressable>
                )}
                {cardDetails && isEditMode && (
                    <View style={style.cardDetail}>
                        <CardEditMode card={cardDetails} refresh={refresh} setCardDetails={setCardDetails} />
                    </View>
                )}
            </Modal>
        </View>
    );
};
