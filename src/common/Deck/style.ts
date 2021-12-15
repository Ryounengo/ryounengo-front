import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { space, colors } = useTheme();

    return StyleSheet.create({
        privateSwitch: {
            marginTop: space[4],
        },
        imageCard: {
            backgroundColor: colors.orange[500],
        },
        textCard: {
            backgroundColor: colors.primary[500],
        },
    });
};
