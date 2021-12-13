import { StyleSheet } from "react-native";
import { useColorModeValue, useTheme } from "native-base";
import { useContrastTextColor } from "@hooks/useContrastTextColor";

export const useStyle = () => {
    const { radii, space, colors, fontSizes } = useTheme();
    const colorScheme = useColorModeValue(colors.dark[700], colors.dark[200]);
    const contrastColor = useContrastTextColor(colorScheme);

    return StyleSheet.create({
        searchBar: {
            fontSize: fontSizes.md,
            borderRadius: radii.full,
            backgroundColor: colorScheme,
            paddingLeft: space[12],
        },
        searchIcon: {
            left: space[3],
        },
        moreIcon: {
            right: space[3],
        },
        icon: {
            color: contrastColor,
            opacity: 0.4,
            position: "absolute",
            zIndex: 1,
        },
    });
};
