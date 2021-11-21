import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const theme = useTheme();

    return StyleSheet.create({
        title: {
            paddingTop: theme.space[4],
            fontFamily: theme.fonts.heading,
            fontSize: theme.fontSizes["5xl"],
            textAlign: "center",
        },
    });
};
