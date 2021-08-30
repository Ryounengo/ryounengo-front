import { Button, View } from "native-base";
import { useTranslation } from "react-i18next";
import { useAuthentication } from "../../common";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const UserSettings = () => {
    const { t } = useTranslation("user");
    const { logout } = useAuthentication();
    const { setUser } = useContext(UserContext);

    const logUserOut = () => logout().then(() => setUser(undefined));

    return (
        <View>
            <Button onPress={logUserOut}>{t("user:logout")}</Button>
        </View>
    );
};
