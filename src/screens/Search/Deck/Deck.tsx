import { createStackNavigator } from "@react-navigation/stack";
import { CreateDeck } from "../../Deck/CreateDeck/CreateDeck";
import { SearchDeck } from "./SearchDeck";
import { useTranslation } from "react-i18next";

const Stack = createStackNavigator();

export const Deck = () => {
    const { t } = useTranslation("deck");

    return (
        <Stack.Navigator initialRouteName="searchDeck" screenOptions={{ headerShown: false }}>
            <Stack.Screen component={SearchDeck} name="searchDeck" options={{ title: t("decks") }} />
            <Stack.Screen component={CreateDeck} name="createDeck" options={{ title: t("createDeck") }} />
        </Stack.Navigator>
    );
};
