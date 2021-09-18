import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const theme = useTheme();
    const { colors, shadows, radii } = theme;

    return StyleSheet.create({
        deck: {
            flexDirection: "row",
            minHeight: 140,
            width: "100%",
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: radii.lg,
            alignItems: "center",
            ...shadows()[1],
        },
        deckList: {
            marginHorizontal: 20,
            marginBottom: 20,
        },
        actionButton: {
            margin: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: radii.full,
        },
    });
};
