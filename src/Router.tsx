import { useTranslation } from "react-i18next";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SearchRoute } from "./screens/Search/Search";

const Drawer = createDrawerNavigator();

export const Router = () => {
    const { t } = useTranslation();

    return (
        <Drawer.Navigator drawerType="slide" initialRouteName="search">
            <Drawer.Screen component={SearchRoute} name="search" options={{ title: t("search") }} />
        </Drawer.Navigator>
    );
};
