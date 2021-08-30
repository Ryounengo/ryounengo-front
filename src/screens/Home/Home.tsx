import { useTranslation } from "react-i18next";
import { SearchRoute } from "../Search/Search";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { THomeStackParams } from "./IHome";

const Drawer = createDrawerNavigator<THomeStackParams>();

export const Home = () => {
    const { t } = useTranslation("deck");

    return (
        <Drawer.Navigator drawerType="slide">
            <Drawer.Screen component={SearchRoute} name="search" options={{ title: t("search") }} />
        </Drawer.Navigator>
    );
};
