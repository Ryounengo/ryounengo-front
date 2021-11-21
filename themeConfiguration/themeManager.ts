import { ColorMode } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageManager } from "native-base/src/core/color-mode/types";
const LIGHT_COLOR_MODE = "light";
const DARK_COLOR_MODE = "dark";

export const colorModeManager: StorageManager = {
    get: async () => {
        try {
            const colorMode = await AsyncStorage.getItem("@color-mode");

            return colorMode === DARK_COLOR_MODE ? DARK_COLOR_MODE : LIGHT_COLOR_MODE;
        } catch (e) {
            return LIGHT_COLOR_MODE;
        }
    },
    set: async (value: ColorMode) => {
        try {
            if (value) {
                await AsyncStorage.setItem("@color-mode", value);
            }
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    },
};
