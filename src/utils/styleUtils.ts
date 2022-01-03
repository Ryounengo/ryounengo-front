import { ICustomTheme } from "native-base";

const stringToSignature = (value: string): number => {
    let result = 0;
    for (let i = 0; i < value.length; i++) {
        result += value.charCodeAt(i);
    }

    return result;
};

/**
 * @param theme
 * @param id Used to get the same random color with a given data.
 */
export const getRandomThemeColor = (theme: ICustomTheme, id?: string) => {
    const { colors } = theme;

    const themePaletteColors: string[] = [Object.values(colors.primary)].flat();

    const constantPicker = id ? stringToSignature(id) % (themePaletteColors.length - 1) : undefined;

    return themePaletteColors[constantPicker ?? Math.round((themePaletteColors.length - 1) * Math.random())];
};
