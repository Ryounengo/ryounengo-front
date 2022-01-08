import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { space } = useTheme();

    return StyleSheet.create({
        privateSwitch: {
            marginTop: space[4],
        },
    });
};
