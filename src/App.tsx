import { UserContext } from "@context";
import { Box, Spinner, Text, useColorMode } from "native-base";
import { useTranslation } from "react-i18next";
import { RootNavigation } from "@navigation/RootNavigation";
import { IUser } from "@typings/interfaces/IAuthentication";
import { getUser, refreshToken } from "@utils/authUtils";
import { useEffect, useState } from "react";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<IUser>();
    const [error, setError] = useState<unknown>();
    const { t } = useTranslation("common");
    const { setColorMode } = useColorMode();
    setColorMode("light");

    useEffect(() => {
        refreshToken()
            .then((token) => {
                setUser(token ? getUser(token) : undefined);
            })
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, []);

    const renderApp = () => {
        if (error || isLoading) {
            return (
                <Box>
                    {error && <Text>{t("genericError")}</Text>}
                    {isLoading && <Spinner accessibilityLabel="Loading app" />}
                </Box>
            );
        }

        return <RootNavigation />;
    };

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {renderApp()}
        </UserContext.Provider>
    );
};

export default App;
