import { Box, Text, IBoxProps } from "native-base";
import { useStyle } from "./style";
import { FC } from "react";
import { SvgProps } from "react-native-svg";

interface IParams extends IBoxProps {
    icon: FC<SvgProps>;
    name: string;
    description: string;
}

export const CardTypeCard = (props: IParams) => {
    const { icon: Icon, description, name, ...boxProps } = props;
    const style = useStyle();

    return (
        <Box {...boxProps} style={style.container}>
            <Box style={[style.item]}>
                <Box style={style.icon}>
                    <Icon color={style.icon.color} height={style.icon.height} width={style.icon.width} />
                </Box>
            </Box>
            <Box style={style.item}>
                <Text style={style.name}>{name}</Text>
            </Box>
            <Box style={style.item}>
                <Text style={style.description}>{description}</Text>
            </Box>
        </Box>
    );
};
