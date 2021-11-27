import { StyleSheet } from "react-native";
import { useTheme } from "native-base";
import { getRandomThemeColor } from "@utils/styleUtils";
import { useContrastTextColor } from "@hooks/useContrastTextColor";

interface IParams {
    deckId: string;
}

export const useStyle = ({ deckId }: IParams) => {
    const theme = useTheme();
    const { radii, space, fontSizes, fonts } = theme;

    const randomColor = getRandomThemeColor(theme, deckId);
    const randomColorContrast = useContrastTextColor(randomColor);

    return StyleSheet.create({
        circlePattern: {
            position: "absolute",
            color: randomColorContrast,
            opacity: 0.2,
            bottom: 0,
        },
        linesPattern: {
            position: "absolute",
            color: randomColorContrast,
            opacity: 0.2,
            top: 0,
            right: 0,
        },
        container: {
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            height: "100%",
            backgroundColor: randomColor,
            padding: space[4],
            borderRadius: radii.lg,
            flexWrap: "wrap",
        },
        item: {
            color: randomColorContrast,
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
        },
        additionalInfo: {
            flexWrap: "wrap",
            justifyContent: "flex-start",
        },
        deckName: {
            color: randomColorContrast,
            fontFamily: fonts.body,
            fontSize: fontSizes.xl,
            textTransform: "capitalize",
        },
        cards: {
            color: randomColorContrast,
            fontSize: fontSizes.sm,
        },
        r: {
            marginRight: space[2],
            color: randomColorContrast,
            borderStyle: "solid",
            fontSize: fontSizes.xs,
            borderWidth: 1,
            borderRadius: radii.full,
            borderColor: randomColorContrast,
            width: 20,
            height: 20,
            textAlign: "center",
            textTransform: "uppercase",
        },
    });
};
