import { useTranslation } from "react-i18next";
import { createStackNavigator } from "@react-navigation/stack";
import { Decks } from "@screens/Deck/Decks";
import { TDeckNavigation } from "@navigation/INavigation";
import { useTheme } from "native-base";

const Stack = createStackNavigator<TDeckNavigation>();

export const DeckNavigation = () => {
    const { t } = useTranslation(["common", "deck"]);
    const theme = useTheme();

    return (
        <Stack.Navigator
            initialRouteName="decks"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: theme.colors.white },
            }}
        >
            <Stack.Screen component={Decks} name="decks" options={{ title: t("deck:decks") }} />
        </Stack.Navigator>
    );
};
