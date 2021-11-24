import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { space } = useTheme();

    return StyleSheet.create({
        container: {
            margin: space[2],
        },
        deckList: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
        },
        deck: {
            flexBasis: "50%",
            height: 250,
            padding: space[2],
        },
    });
};
