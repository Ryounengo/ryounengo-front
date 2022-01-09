import { StyleSheet } from "react-native";
import { useColorModeValue, useTheme } from "native-base";
import { useContrastTextColor } from "@hooks/useContrastTextColor";

interface IParams {
    toReview: boolean;
}

export const useStyle = ({ toReview }: IParams) => {
    const theme = useTheme();
    const { space, fonts, colors, radii, fontSizes } = theme;
    const cardColor = useColorModeValue(colors.dark["700"], colors.dark["200"]);
    const cardColorContrast = useContrastTextColor(cardColor);

    return StyleSheet.create({
        text: {
            lineHeight: 40,
            flexBasis: "100%",
            color: cardColorContrast,
            fontFamily: fonts.body,
            textAlign: "center",
            fontSize: fontSizes["3xl"],
        },
        example: {
            textAlign: "center",
            fontSize: fontSizes.xl,
        },
        reviewLevelItem: {
            justifyContent: "flex-start",
        },
        reviewLevel: {
            lineHeight: 30,
            top: 0,
            position: "absolute",
            fontSize: fontSizes["3xl"],
            color: toReview ? colors.red[500] : colors.green[500],
        },
        card: {
            overflow: "hidden",
            justifyContent: "space-between",
            alignContent: "center",
            height: "100%",
            padding: space[4],
            zIndex: 1,
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
        cardBackground: {
            borderRadius: radii.lg,
            backgroundColor: cardColor,
            position: "absolute",
            width: "100%",
            height: "100%",
        },
        cardIcon: {
            position: "absolute",
            color: cardColorContrast,
            opacity: 0.05,
            bottom: 0,
            width: "100%",
            height: "100%",
            transform: [{ rotate: "20deg" }],
        },
        hiragana: {
            fontSize: fontSizes["4xl"],
        },
        kanji: {
            fontSize: fontSizes["2xl"],
        },
        roumaji: {
            fontSize: fontSizes.xl,
        },
        rotate: {
            transform: [{ rotate: "200deg" }],
        },
        optionItems: {
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            height: "100%",
        },
        move: {
            color: colors.blue[500],
        },
        delete: {
            color: colors.error[500],
        },
        edit: {
            color: cardColorContrast,
        },
    });
};
