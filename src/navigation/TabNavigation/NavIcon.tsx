import { useTheme } from "native-base";
import { FC } from "react";
import { SvgProps } from "react-native-svg";

interface IParams {
    icon: FC<SvgProps>;
    isFocused: boolean;
}

export const NavIcon = (props: IParams) => {
    const { icon: Icon, isFocused } = props;
    const theme = useTheme();

    return <Icon color={theme.colors.dark[200]} height={isFocused ? 35 : 30} width={isFocused ? 35 : 30} />;
};
