import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

export const useStyle = () => {
    const { space, colors, radii } = useTheme();

    return StyleSheet.create({
        stepButton: {
            padding: space[4],
            backgroundColor: colors.primary[500],
            borderRadius: radii.full,
            alignContent: "center",
            width: 40,
            height: 40,
            flexGrow: 0,
        },
        disabled: {
            backgroundColor: colors.dark[700],
        },
        separator: {
            flexDirection: "row",
            height: 1,
            backgroundColor: colors.primary[500],
            alignSelf: "center",
            marginHorizontal: space[2],
            flexGrow: 1,
        },
    });
};
