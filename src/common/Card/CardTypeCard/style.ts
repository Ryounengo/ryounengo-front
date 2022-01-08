import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { space, radii, fontSizes, colors } = useTheme();

    return StyleSheet.create({
        container: {
            padding: space[4],
            alignContent: "center",
            alignItems: "center",
            borderRadius: radii.xl,
            justifyContent: "center",
        },
        icon: {
            height: 75,
            width: 110,
            color: colors.white,
        },
        name: {
            color: colors.white,
            textAlign: "center",
            fontSize: fontSizes.lg,
            fontWeight: "bold",
        },
        description: {
            color: colors.white,
            maxWidth: "80%",
            textAlign: "center",
        },
        item: {
            marginTop: space[1],
        },
        textCard: {
            backgroundColor: colors.primary[500],
        },
    });
};
