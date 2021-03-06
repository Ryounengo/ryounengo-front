import { Dimensions, StyleSheet } from "react-native";
import { useTheme } from "native-base";
import { getRandomThemeColor } from "@utils/styleUtils";
import { useContrastTextColor } from "@hooks/useContrastTextColor";
import { addAlpha } from "@utils/color";

const windowHeight = Dimensions.get("window").height;

interface IParams {
    deckId?: string;
}

export const useStyle = ({ deckId }: IParams) => {
    const theme = useTheme();
    const { space, fonts, fontSizes } = theme;
    const deckColor = getRandomThemeColor(theme, deckId);
    const deckColorContrast = useContrastTextColor(deckColor);

    return StyleSheet.create({
        container: {
            flexWrap: "wrap",
            padding: space[4],
            paddingTop: space[20],
            justifyContent: "space-between",
            alignContent: "center",
            height: windowHeight * 0.3,
        },
        background: {
            backgroundColor: deckColor,
            position: "absolute",
            width: "100%",
            height: windowHeight * 0.3,
            borderBottomLeftRadius: 1000,
            borderBottomRightRadius: 1000,
            transform: [{ scaleX: 2.5 }],
        },
        item: {
            width: "100%",
            justifyContent: "center",
        },
        tags: {
            color: deckColorContrast,
            fontFamily: fonts.body,
            fontSize: fontSizes.sm,
            textTransform: "capitalize",
            textAlign: "center",
        },
        deckName: {
            color: deckColorContrast,
            fontFamily: fonts.body,
            fontSize: fontSizes["2xl"],
            textTransform: "capitalize",
            textAlign: "center",
        },
        reviewCountContainer: {
            justifyContent: "flex-start",
            marginBottom: space[2],
        },
        reviewCount: {
            color: deckColorContrast,
            fontSize: fontSizes.md,
        },
        actionButton: {
            backgroundColor: addAlpha(deckColorContrast, 0.2),
        },
    });
};
