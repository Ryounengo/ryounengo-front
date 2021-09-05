import { useTranslation } from "react-i18next";
import { CreateDeck } from "@screens/Deck/CreateDeck/CreateDeck";
import { createStackNavigator } from "@react-navigation/stack";
import { Decks } from "@screens/Deck/Decks";
import { DeckDetails } from "@screens/Deck/DeckDetails/DeckDetails";
import { TDeckNavigation } from "@navigation/INavigation";
import { CreateCard } from "@screens/Card/CreateCard/CreateCard";

const Stack = createStackNavigator<TDeckNavigation>();

export const DeckNavigation = () => {
    const { t } = useTranslation(["common", "deck"]);

    return (
        <Stack.Navigator initialRouteName="decks">
            <Stack.Screen component={Decks} name="decks" options={{ title: t("deck:decks") }} />
            <Stack.Screen component={CreateDeck} name="createDeck" options={{ title: t("deck:createDeck") }} />
            <Stack.Screen component={CreateCard} name="createCard" options={{ title: t("card:createCard") }} />
            <Stack.Screen component={DeckDetails} name="deckDetails" options={{ title: t("deck:deckDetails") }} />
        </Stack.Navigator>
    );
};
