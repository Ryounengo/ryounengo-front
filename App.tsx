import { NativeBaseProvider, Box } from "native-base";
import { useTranslation } from "react-i18next";

const App = () => {
    const { t } = useTranslation();

    return (
        <NativeBaseProvider>
            <Box>{t("Hello World")}</Box>
        </NativeBaseProvider>
    );
};

export default App;
