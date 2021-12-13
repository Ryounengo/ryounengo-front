import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { NativeBaseProvider } from "native-base";
import { name as appName } from "./app.json";
import { i18n } from "./src/i18n/i18n";
import { I18nextProvider } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";
import { defaultSWRConfig } from "./src/swr/defaultSWRConfig";
import { SWRConfig } from "swr";
import { colorModeManager, theme, config } from "./themeConfiguration";

const AllProviders = () => (
    <I18nextProvider i18n={i18n}>
        <NavigationContainer>
            <NativeBaseProvider colorModeManager={colorModeManager} config={config} theme={theme}>
                <SWRConfig value={defaultSWRConfig}>
                    <App />
                </SWRConfig>
            </NativeBaseProvider>
        </NavigationContainer>
    </I18nextProvider>
);

AppRegistry.registerComponent(appName, () => AllProviders);
