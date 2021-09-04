import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
import { CardNavigation } from "./CardNavigation";
import { TBottomTabNavigation } from "./INavigation";
import { StackSettings } from "./StackSettings";
import { DeckNavigation } from "@navigation/DeckNavigation";

const Tab = createBottomTabNavigator<TBottomTabNavigation>();

export const BottomTabNavigation = () => {
    const { t } = useTranslation(["common", "deck", "card"]);

    return (
        <Tab.Navigator initialRouteName="deck">
            <Tab.Screen component={DeckNavigation} name="deck" options={{ title: t("deck:deck") }} />
            <Tab.Screen component={CardNavigation} name="card" options={{ title: t("card:card") }} />
            <Tab.Screen component={StackSettings} name="settings" options={{ title: t("common:settings") }} />
        </Tab.Navigator>
    );
};
