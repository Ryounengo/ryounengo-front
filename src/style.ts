import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { colors } = useTheme();

    return StyleSheet.create({
        body: {
            height: 150,
            backgroundColor: colors.darkBlue[300],
        },
    });
};
