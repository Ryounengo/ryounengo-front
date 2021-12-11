import { StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "native-base";

interface IParams {
    color: string;
    size: number;
    borderWidth?: ViewStyle["borderWidth"];
}

export const useStyle = ({ color, borderWidth, size }: IParams) => {
    const { radii } = useTheme();

    return StyleSheet.create({
        container: {
            padding: size * 0.4,
            borderStyle: "solid",
            borderWidth: borderWidth ?? 1,
            borderRadius: radii.full,
            color: color,
            borderColor: color,
        },
    });
};
