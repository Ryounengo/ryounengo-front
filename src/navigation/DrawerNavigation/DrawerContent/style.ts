import { StyleSheet } from "react-native";
import { useColorModeValue, useTheme } from "native-base";
import { useContrastTextColor } from "@hooks/useContrastTextColor";

export const useStyle = () => {
    const { fontSizes, space, colors } = useTheme();
    const backgroundColor = useColorModeValue(colors.white, colors.dark[100]);
    const backgroundColorContrast = useContrastTextColor(backgroundColor);

    return StyleSheet.create({
        profile: {
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 1,
            paddingBottom: space[2],
            marginHorizontal: space[10],
            borderColor: backgroundColorContrast,
            marginBottom: space[4],
        },
        username: {
            fontWeight: "bold",
            fontSize: fontSizes.xl,
        },
        appearance: {
            textAlign: "center",
        },
        appearanceWrapper: {
            alignItems: "center",
            justifyContent: "center",
        },
        languageWrapper: {
            minWidth: 150,
            fontSize: fontSizes.lg,
        },
        contactLinks: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginBottom: space[4],
            marginTop: "auto",
            fontSize: fontSizes.xl,
        },
    });
};
