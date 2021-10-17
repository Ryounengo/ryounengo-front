import { useTranslation } from "react-i18next";
import { createStackNavigator } from "@react-navigation/stack";
import { Decks } from "@screens/Deck/Decks";
import { TDeckNavigation } from "@navigation/INavigation";

const Stack = createStackNavigator<TDeckNavigation>();

export const DeckNavigation = () => {
    const { t } = useTranslation(["common", "deck"]);

    return (
        <Stack.Navigator initialRouteName="decks">
            <Stack.Screen component={Decks} name="decks" options={{ title: t("deck:decks") }} />
        </Stack.Navigator>
    );
};
