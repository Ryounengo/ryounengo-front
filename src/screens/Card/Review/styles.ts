import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        button: {
            position: "absolute",
            bottom: 0,
            width: "100%",
        },
        frontCard: {
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: colors.darkBlue[300],
        },
        backCard: {
            backgroundColor: colors.red[300],
            height: "100%",
            backfaceVisibility: "hidden",
        },
    });
};
