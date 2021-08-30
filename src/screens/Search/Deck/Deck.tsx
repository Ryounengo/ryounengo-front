import { createStackNavigator } from "@react-navigation/stack";
import { CreateDeck } from "../../Deck/CreateDeck/CreateDeck";
import { SearchDeck } from "./SearchDeck";
import { useTranslation } from "react-i18next";
import { TDeckStackParams } from "./IDeck";

const Stack = createStackNavigator<TDeckStackParams>();

export const Deck = () => {
    const { t } = useTranslation("deck");

    return (
        <Stack.Navigator initialRouteName="decks" screenOptions={{ headerShown: false }}>
            <Stack.Screen component={SearchDeck} name="decks" options={{ title: t("decks") }} />
            <Stack.Screen component={CreateDeck} name="createDeck" options={{ title: t("createDeck") }} />
        </Stack.Navigator>
    );
};
