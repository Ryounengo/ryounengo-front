import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { space } = useTheme();

    const cardsNumberPerRow = 3;

    return StyleSheet.create({
        container: {
            margin: space[2],
        },
        deckList: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
        },
        deck: {
            flexBasis: `${(1 / cardsNumberPerRow) * 100}%`,
            height: 200,
            padding: space[2],
        },
    });
};
