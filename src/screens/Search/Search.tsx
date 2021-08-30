import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTranslation } from "react-i18next";
import { Deck } from "./Deck/Deck";
import { SearchCard } from "./Card/SearchCard";
import { TSearchStackParams } from "./ISearch";

const Tab = createMaterialTopTabNavigator<TSearchStackParams>();

export const SearchRoute = () => {
    const { t } = useTranslation(["common", "deck"]);

    return (
        <Tab.Navigator initialRouteName="decks">
            <Tab.Screen component={Deck} name="decks" options={{ title: t("deck:decks") }} />
            <Tab.Screen component={SearchCard} name="cards" options={{ title: "card" }} />
        </Tab.Navigator>
    );
};
