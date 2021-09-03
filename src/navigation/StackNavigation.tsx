import { useTranslation } from "react-i18next";
import { DeckType } from "../screens/Deck/CreateDeck/DeckType";
import { DeckEdit } from "../screens/Deck/CreateDeck/DeckEdit";
import { createStackNavigator } from "@react-navigation/stack";
import { TStackNavigation } from "./INavigation";
import { Decks } from "../screens/Deck/Decks";
import { UserSettings } from "../screens/Settings/UserSettings";
import { DeckDetails } from "../screens/Deck/DeckDetails/DeckDetails";

const Stack = createStackNavigator<TStackNavigation>();

export const StackNavigation = () => {
    const { t } = useTranslation(["common", "deck"]);

    return (
        <Stack.Navigator initialRouteName="decks">
            <Stack.Screen component={Decks} name="decks" options={{ title: t("deck:decks") }} />
            <Stack.Screen component={DeckType} name="deckType" options={{ title: t("deck:chooseDeckType") }} />
            <Stack.Screen component={DeckEdit} name="deckEdit" options={{ title: t("deck:createDeck") }} />
            <Stack.Screen component={UserSettings} name="settings" options={{ title: t("deck:createDeck") }} />
            <Stack.Screen component={DeckDetails} name="deckDetails" options={{ title: t("deck:deckDetails") }} />
        </Stack.Navigator>
    );
};
