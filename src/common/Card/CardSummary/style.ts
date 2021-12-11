import { StyleSheet } from "react-native";
import { useColorModeValue, useTheme } from "native-base";
import { useContrastTextColor } from "@hooks/useContrastTextColor";

interface IParams {
    fullView: boolean;
}

export const useStyle = ({ fullView }: IParams) => {
    const theme = useTheme();
    const { space, fonts, colors, radii, fontSizes } = theme;
    const cardColor = useColorModeValue(colors.dark["700"], colors.dark["200"]);
    const cardColorContrast = useContrastTextColor(cardColor);

    return StyleSheet.create({
        text: {
            flexBasis: "100%",
            color: cardColorContrast,
            fontFamily: fonts.body,
            textAlign: "center",
            fontSize: fullView ? fontSizes.lg : fontSizes.sm,
        },
        example: {
            textAlign: "center",
        },
        reviewLevelItem: {
            justifyContent: "flex-start",
        },
        reviewLevel: {
            position: "absolute",
            color: colors.red[500],
        },
        card: {
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            height: "100%",
            backgroundColor: cardColor,
            padding: space[4],
            borderRadius: radii.lg,
            flexWrap: "wrap",
        },
        container: {
            overflow: "hidden",
        },
        item: {
            color: cardColorContrast,
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
        },
        cardText: {
            flexWrap: "wrap",
        },
        cardIcon: {
            position: "absolute",
            color: cardColorContrast,
            opacity: 0.05,
            bottom: 0,
            width: "100%",
            height: "100%",
            transform: [{ skewY: "10deg" }],
        },
    });
};
