import { useContrastText, useTheme } from "native-base";

export const useContrastTextColor = (color: string) => {
    const { colors } = useTheme();
    const contrastText = useContrastText(color);

    if (contrastText) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return colors[contrastText];
    }

    return undefined;
};
