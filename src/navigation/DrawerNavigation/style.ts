import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { fontSizes } = useTheme();

    return StyleSheet.create({
        text: {
            fontSize: fontSizes.lg,
        },
    });
};
