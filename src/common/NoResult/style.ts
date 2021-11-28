import { StyleSheet } from "react-native";
import { useColorModeValue, useTheme } from "native-base";

export const useStyle = () => {
    const { colors, fontSizes, space } = useTheme();
    const textColor = useColorModeValue(colors.dark[400], colors.dark[600]);

    return StyleSheet.create({
        container: {
            flexWrap: "wrap",
        },
        icon: {
            height: "auto",
            color: textColor,
        },
        noResultText: {
            color: textColor,
            fontSize: fontSizes.lg,
            alignSelf: "center",
            marginTop: space[2],
        },
    });
};
