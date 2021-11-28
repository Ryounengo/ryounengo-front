import { StyleSheet } from "react-native";
import { useTheme } from "native-base";

interface IParams {
    color: string;
}

export const useStyle = ({ color }: IParams) => {
    const { space, radii } = useTheme();

    return StyleSheet.create({
        container: {
            padding: space[1],
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: radii.full,
            color: color,
            borderColor: color,
        },
    });
};
