import Logo from "@static/images/icon.svg";
import { useStyle } from "./style";
import { SvgProps } from "react-native-svg";

export const Icon = (props: SvgProps) => {
    const style = useStyle();

    return <Logo color={style.main.color} {...props} />;
};
