import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTranslation } from "react-i18next";
import { Deck } from "./Deck/Deck";
import { SearchCard } from "./Card/SearchCard";

const Tab = createMaterialTopTabNavigator();

export const SearchRoute = () => {
    const { t } = useTranslation(["common", "deck"]);

    return (
        <Tab.Navigator initialRouteName="deck">
            <Tab.Screen component={Deck} name="deck" options={{ title: t("deck:decks") }} />
            <Tab.Screen component={SearchCard} name="card" options={{ title: "card" }} />
        </Tab.Navigator>
    );
};
