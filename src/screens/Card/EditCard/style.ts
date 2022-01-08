import { StyleSheet } from "react-native";
import { useColorModeValue, useTheme } from "native-base";
import { useContrastTextColor } from "@hooks/useContrastTextColor";

export const useStyle = () => {
    const { colors, radii, space, shadows } = useTheme();
    const contrastPrimaryColor = useContrastTextColor(colors.primary[500]);

    return StyleSheet.create({
        button: {
            position: "absolute",
            bottom: 0,
            width: "100%",
        },
        textCard: {
            backgroundColor: colors.primary[500],
        },
        card: {
            height: 150,
            width: 150,
            marginTop: 12,
            marginBottom: 12,
            backgroundColor: colors.rose[300],
        },
        selectedCard: {
            borderColor: colors.black,
            borderWidth: 2,
        },
        cardWrapper: {
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 24,
        },
        nextButton: {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.primary[500],
            color: contrastPrimaryColor,
            width: 40,
            height: 40,
            borderRadius: radii.full,
            alignSelf: "center",
            ...shadows[4],
        },
        editCardWrapper: {
            backgroundColor: useColorModeValue(colors.dark[800], colors.dark[200]),
            borderRadius: radii.xl,
            padding: space[8],
            marginTop: space[2],
            paddingBottom: space[10],
            ...shadows[3],
        },
    });
};
