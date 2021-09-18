import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const theme = useTheme();
    const { colors, radii } = theme;

    return StyleSheet.create({
        deck: {
            backgroundColor: colors.warmGray[200],
            height: 140,
            width: "100%",
            borderColor: colors.warmGray[400],
            borderStyle: "dashed",
            borderWidth: 2,
            justifyContent: "center",
            padding: 10,
            borderRadius: radii.lg,
            alignItems: "center",
        },
        wrapper: {
            marginHorizontal: 20,
        },
        text: {
            color: colors.warmGray[400],
        },
    });
};
