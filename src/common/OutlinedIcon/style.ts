import { StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "native-base";

interface IParams {
    color: string;
    borderWidth?: ViewStyle["borderWidth"];
}

export const useStyle = ({ color, borderWidth }: IParams) => {
    const { space, radii } = useTheme();

    return StyleSheet.create({
        container: {
            padding: space[1],
            borderStyle: "solid",
            borderWidth: borderWidth ?? 1,
            borderRadius: radii.full,
            color: color,
            borderColor: color,
        },
    });
};
