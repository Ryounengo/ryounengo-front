import { StyleSheet } from "react-native";
import { useContrastText, useTheme } from "native-base";

export const useStyle = () => {
    const { colors, radii, space, fontSizes, fonts } = useTheme();
    const colorContrast = useContrastText(colors.primary[500]);

    return StyleSheet.create({
        deck: {},
        container: {
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            height: "100%",
            backgroundColor: colors.primary[500],
            padding: space[4],
            borderRadius: radii.lg,
            flexWrap: "wrap",
        },
        item: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
        },
        deckName: {
            color: colorContrast,
            fontFamily: fonts.body,
            textTransform: "capitalize",
        },
        cards: {
            color: colorContrast,
            fontSize: fontSizes.sm,
        },
        r: {
            color: colorContrast,
            width: "100%",
            alignSelf: "flex-start",
            textTransform: "uppercase",
        },
    });
};
