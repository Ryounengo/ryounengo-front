import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        card: {
            height: 150,
            width: 150,
            marginTop: 12,
            marginBottom: 12,
            backgroundColor: colors.rose[500],
        },
        cardWrapper: {
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 24,
        },
    });
};
