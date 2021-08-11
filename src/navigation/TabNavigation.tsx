import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
import { StackNavigation } from "./StackNavigation";
import { TBottomTabNavigation } from "./INavigation";

const Tab = createBottomTabNavigator<TBottomTabNavigation>();

export const BottomTabNavigation = () => {
    const { t } = useTranslation("common");

    return (
        <Tab.Navigator>
            <Tab.Screen component={StackNavigation} name="navigation" options={{ title: t("home") }} />
        </Tab.Navigator>
    );
};
