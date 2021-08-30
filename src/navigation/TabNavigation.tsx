import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
import { StackNavigation } from "./StackNavigation";
import { TBottomTabNavigation } from "./INavigation";
import { StackSettings } from "./StackSettings";

const Tab = createBottomTabNavigator<TBottomTabNavigation>();

export const BottomTabNavigation = () => {
    const { t } = useTranslation("common");

    return (
        <Tab.Navigator>
            <Tab.Screen component={StackNavigation} name="home" options={{ title: t("home") }} />
            <Tab.Screen component={StackSettings} name="settings" options={{ title: t("settings") }} />
        </Tab.Navigator>
    );
};
