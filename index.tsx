import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { i18n } from "./src/i18n/i18n";
import { I18nextProvider } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";

const AllProviders = () => (
    <I18nextProvider i18n={i18n}>
        <NavigationContainer>
            <App />
        </NavigationContainer>
    </I18nextProvider>
);

AppRegistry.registerComponent(appName, () => AllProviders);
