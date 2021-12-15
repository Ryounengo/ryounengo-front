import { StyleSheet } from "react-native";
import { useColorModeValue, useTheme } from "native-base";
import { useContrastTextColor } from "@hooks/useContrastTextColor";

export const useStyle = () => {
    const { colors, fontSizes, fonts } = useTheme();

    const backgroundColor = useColorModeValue(colors.white, colors.dark[100]);
    const backgroundColorContrast = useContrastTextColor(backgroundColor);

    return StyleSheet.create({
        navigationTitle: {
            fontFamily: fonts.body,
            fontWeight: "300",
            fontSize: fontSizes.md,
            color: backgroundColorContrast,
        },
        navigationCardBackground: {
            backgroundColor,
        },
        navigationHeaderBackButton: {
            color: backgroundColorContrast,
            marginRight: -20,
        },
        navigationTabBar: {
            backgroundColor,
        },
        headerBar: {
            backgroundColor,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
        },
    });
};
