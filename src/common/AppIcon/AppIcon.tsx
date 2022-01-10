import Logo from "@static/icons/icon.svg";
import { useStyle } from "./style";
import { SvgProps } from "react-native-svg";

export const AppIcon = (props: SvgProps) => {
    const style = useStyle();

    return <Logo color={style.main.color} {...props} />;
};
