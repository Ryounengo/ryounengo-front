import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const theme = useTheme();
    const { colors, shadows, radii } = theme;

    return StyleSheet.create({
        card: {
            flexDirection: "row",
            justifyContent: "center",
            minHeight: 140,
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: radii.lg,
            ...shadows()[1],
        },
        cardList: {
            marginHorizontal: 20,
            marginBottom: 20,
        },
    });
};
