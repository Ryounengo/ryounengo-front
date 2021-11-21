import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        main: {
            color: colors.primary[500],
        },
    });
};
