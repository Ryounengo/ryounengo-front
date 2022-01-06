import { ICard } from "@typings/interfaces";
import { Center, Pressable, Text } from "native-base";
import { useStyle } from "@screens/Card/Review/styles";
import { Animated } from "react-native";
import { useEffect, useRef } from "react";

interface IParams {
    card: ICard;
    isCurrenCardReversed: boolean;
}

export const ReviewCard = (props: IParams) => {
    const { card, isCurrenCardReversed } = props;
    const style = useStyle();

    const flipAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(flipAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [card, flipAnimation]);

    let flipRotation = 0;
    flipAnimation.addListener(({ value }) => (flipRotation = value));

    const flipToFrontStyle = {
        transform: [
            {
                rotateY: flipAnimation.interpolate({
                    inputRange: [0, 180],
                    outputRange: ["0deg", "180deg"],
                }),
            },
        ],
    };

    const flipToBackStyle = {
        transform: [
            {
                rotateY: flipAnimation.interpolate({
                    inputRange: [0, 180],
                    outputRange: ["180deg", "360deg"],
                }),
            },
        ],
    };

    const flipToFront = () => {
        Animated.timing(flipAnimation, {
            toValue: 180,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const flipToBack = () => {
        Animated.timing(flipAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const flipCard = () => (flipRotation ? flipToBack() : flipToFront());

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
