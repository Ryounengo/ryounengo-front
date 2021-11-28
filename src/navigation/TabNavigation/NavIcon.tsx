import { useColorModeValue, useTheme } from "native-base";
import { FC } from "react";
import { SvgProps } from "react-native-svg";

interface IParams {
    icon: FC<SvgProps>;
    isFocused: boolean;
}

export const NavIcon = (props: IParams) => {
    const { icon: Icon, isFocused } = props;
    const { colors } = useTheme();
    const focusedNavIconColor = useColorModeValue(colors.dark[200], colors.dark[800]);
    const navIconColor = useColorModeValue(colors.dark[500], colors.dark[400]);

    return (
        <Icon
            color={isFocused ? focusedNavIconColor : navIconColor}
            height={isFocused ? 35 : 30}
            width={isFocused ? 35 : 30}
        />
    );
};
