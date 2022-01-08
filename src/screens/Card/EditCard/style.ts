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
        textCard: {
            backgroundColor: colors.primary[500],
        },
        card: {
            height: 150,
            width: 150,
            marginTop: 12,
            marginBottom: 12,
            backgroundColor: colors.rose[300],
        },
        selectedCard: {
            borderColor: colors.black,
            borderWidth: 2,
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
