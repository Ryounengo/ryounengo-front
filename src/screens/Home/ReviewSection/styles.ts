import { Dimensions, StyleSheet } from "react-native";
import { useTheme } from "native-base";

const windowWidth = Dimensions.get("window").width;

export const useStyle = () => {
    const { space } = useTheme();

    return StyleSheet.create({
        container: {
            marginVertical: space[2],
        },
        deckList: {
            display: "flex",
            flexDirection: "row",
        },
        deck: {
            width: windowWidth * (44 / 100),
            height: 250,
            padding: space[2],
        },
        firstDeck: {
            marginLeft: space[0.5],
        },
    });
};
