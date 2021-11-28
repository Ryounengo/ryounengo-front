import { Dimensions, StyleSheet } from "react-native";
import { useColorModeValue, useTheme } from "native-base";

const windowWidth = Dimensions.get("window").width;

export const useStyle = () => {
    const { space, colors } = useTheme();

    const contrastTextColor = useColorModeValue(colors.dark[500], colors.dark[800]);

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
        discoverMore: {
            display: "flex",
            color: contrastTextColor,
        },
        firstDeck: {
            marginLeft: space[0.5],
        },
    });
};
