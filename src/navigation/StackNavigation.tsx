import { useTranslation } from "react-i18next";
import { CreateDeck } from "@screens/Deck/CreateDeck/CreateDeck";
import { createStackNavigator } from "@react-navigation/stack";
import { TStackNavigation } from "./INavigation";
import { Decks } from "@screens/Deck/Decks";
import { UserSettings } from "@screens/Settings/UserSettings";
import { DeckDetails } from "@screens/Deck/DeckDetails/DeckDetails";
import { CreateCard } from "@screens/Card/CreateCard/CreateCard";

const Stack = createStackNavigator<TStackNavigation>();

export const StackNavigation = () => {
    const { t } = useTranslation(["common", "deck"]);

    return (
        <Stack.Navigator initialRouteName="decks">
            <Stack.Screen component={Decks} name="decks" options={{ title: t("deck:decks") }} />
            <Stack.Screen component={CreateDeck} name="createDeck" options={{ title: t("deck:createDeck") }} />
            <Stack.Screen component={UserSettings} name="settings" options={{ title: t("deck:createDeck") }} />
            <Stack.Screen component={DeckDetails} name="deckDetails" options={{ title: t("deck:deckDetails") }} />
            <Stack.Screen component={CreateCard} name="createCard" options={{ title: t("card:createCard") }} />
        </Stack.Navigator>
    );
};
