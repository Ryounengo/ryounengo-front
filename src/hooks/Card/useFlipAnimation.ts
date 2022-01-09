import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { ICard } from "@typings/interfaces";

export const useFlipAnimation = (card?: ICard) => {
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

    return {
        flipCard,
        flipToBackStyle,
        flipToFrontStyle,
        flipRotation,
    };
};
