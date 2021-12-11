import { StyleSheet } from "react-native";
import { useColorModeValue, useTheme } from "native-base";

export const useStyle = () => {
    const { colors, fontSizes, fonts } = useTheme();

    const backgroundColor = useColorModeValue(colors.white, colors.dark[100]);

    return StyleSheet.create({
        navigationTitle: {
            fontFamily: fonts.body,
            fontWeight: "300",
            fontSize: fontSizes.md,
            color: colors.white,
        },
        navigationCardBackground: {
            backgroundColor,
        },
        navigationHeaderBackButton: {
            color: colors.white,
            marginRight: -20,
        },
        navigationTabBar: {
            backgroundColor,
        },
    });
};
