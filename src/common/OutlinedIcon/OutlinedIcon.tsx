import { FC } from "react";
import { View } from "native-base";
import { useStyle } from "./style";
import { SvgProps } from "react-native-svg";

interface IParams {
    icon: FC<SvgProps>;
    color: string;
    size: number;
}

export const OutlinedIcon = (props: IParams) => {
    const { icon: Icon, color, size } = props;
    const style = useStyle({ color, size });

    return (
        <View style={style.container}>
            <Icon color={color} height={size} width={size} />
        </View>
    );
};
