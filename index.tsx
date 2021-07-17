import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { i18n } from "./src/i18n/i18n";
import { I18nextProvider } from "react-i18next";

const AllProviders = () => (
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
);

AppRegistry.registerComponent(appName, () => AllProviders);
