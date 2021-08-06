import { UserContext } from "./context/UserContext";
import { Router } from "./Router";
import { IUser, useAuthentication } from "./common";
import { useEffect, useState } from "react";
import { Box, Spinner, Text } from "native-base";
import { useTranslation } from "react-i18next";

const App = () => {
    const { refreshToken, postRefreshTokenState } = useAuthentication();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<IUser>();
    const { t } = useTranslation("common");

    useEffect(() => {
        refreshToken()
            .then((userData) => setUser(userData))
            .finally(() => setIsLoading(false));
    }, [refreshToken]);

    const renderApp = () => {
        const { error } = postRefreshTokenState;

        if (error || isLoading) {
            return (
                <Box>
                    {error && <Text>{t("genericError")}</Text>}
                    {isLoading && <Spinner accessibilityLabel="Loading app" />}
                </Box>
            );
        }

        return <Router />;
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
