import { FC } from "react";
import { View } from "native-base";
import { useStyle } from "./style";
import { SvgProps } from "react-native-svg";
import { ViewStyle } from "react-native";

interface IParams {
    icon: FC<SvgProps>;
    color: string;
    borderWidth?: ViewStyle["borderWidth"];
    size: ViewStyle["width"];
    style?: ViewStyle;
}

export const OutlinedIcon = (props: IParams) => {
    const { icon: Icon, color, size, style: additionalStyle, borderWidth } = props;
    const style = useStyle({ color, borderWidth });

    return (
        <View style={[style.container, additionalStyle]}>
            <Icon color={color} height={size} width={size} />
        </View>
    );
};
