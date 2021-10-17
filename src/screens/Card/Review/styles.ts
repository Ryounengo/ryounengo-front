import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        card: {},
        frontCard: {
            position: "absolute",
            width: "100%",
            height: "90%",
            backgroundColor: colors.darkBlue[300],
        },
        backCard: {
            backgroundColor: colors.red[300],
            height: "90%",
            backfaceVisibility: "hidden",
        },
    });
};
