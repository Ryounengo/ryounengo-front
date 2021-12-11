import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const theme = useTheme();
    const { space } = theme;

    const cardsNumberPerRow = 3;

    return StyleSheet.create({
        container: {
            margin: space[2],
        },
        card: {
            flexBasis: `${(1 / cardsNumberPerRow) * 100}%`,
            height: 200,
            padding: space[2],
        },
        cardList: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
        },
    });
};
