import { Modal, Pressable, useDisclose } from "native-base";
import { CardSummary } from "@common/Card/CardSummary/CardSummary";
import { ICardSummary } from "@typings/interfaces";
import { useStyle } from "@screens/Card/CardList/CardList/styles";
import { CardFront } from "@screens/Card/CardList/CardList/CardDetails/CardFront";
import { Animated } from "react-native";
import { CardBack } from "@screens/Card/CardList/CardList/CardDetails/CardBack";
import { useFlipAnimation } from "@hooks/Card/useFlipAnimation";

interface IParams {
    card: ICardSummary;
}

export const CardDetails = (props: IParams) => {
    const { card } = props;
    const style = useStyle();
    const { isOpen, onClose, onOpen } = useDisclose();
    const { flipToFrontStyle, flipToBackStyle, flipCard } = useFlipAnimation();
    const displayOptions = () => console.log("options");

    return (
        <>
            <Pressable style={style.card} onLongPress={displayOptions} onPress={onOpen}>
                <CardSummary card={card} />
            </Pressable>
            <Modal isOpen={isOpen} size="md" onClose={onClose}>
                <Pressable style={style.cardDetail} onPress={flipCard} onTouchMove={onClose}>
                    <Animated.View style={[style.cardFront, flipToFrontStyle]}>
                        <CardFront card={card} />
                    </Animated.View>
                    <Animated.View style={[style.cardBack, flipToBackStyle]}>
                        <CardBack card={card} />
                    </Animated.View>
                </Pressable>
            </Modal>
        </>
    );
};
