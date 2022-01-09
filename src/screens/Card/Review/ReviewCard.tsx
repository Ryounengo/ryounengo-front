import { ICard } from "@typings/interfaces";
import { Center, Pressable, Text } from "native-base";
import { useStyle } from "@screens/Card/Review/styles";
import { Animated } from "react-native";
import { useFlipAnimation } from "@hooks/Card/useFlipAnimation";

interface IParams {
    card: ICard;
    isCurrenCardReversed: boolean;
}

export const ReviewCard = (props: IParams) => {
    const { card, isCurrenCardReversed } = props;
    const style = useStyle();
    const { flipToFrontStyle, flipToBackStyle, flipCard } = useFlipAnimation(card);
    const front = isCurrenCardReversed ? card.back : card.front;
    const back = isCurrenCardReversed ? card.front : card.back;

    return (
        <Pressable onPress={flipCard}>
            <Animated.View style={[style.frontCard, flipToFrontStyle]}>
                <Center marginY="auto">
                    {front.map((field, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Text key={index}>{field}</Text>
                    ))}
                    {!isCurrenCardReversed && card.example}
                </Center>
            </Animated.View>
            <Animated.View style={[style.backCard, flipToBackStyle]}>
                <Center marginY="auto">
                    {back.map((field, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Text key={index}>{field}</Text>
                    ))}
                    {isCurrenCardReversed && card.example}
                </Center>
            </Animated.View>
        </Pressable>
    );
};
