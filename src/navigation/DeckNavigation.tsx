import { createStackNavigator } from "@react-navigation/stack";
import { Decks } from "@screens/Deck/Decks";
import { TDeckNavigation } from "@navigation/INavigation";
import { useStyle } from "./style";

const Stack = createStackNavigator<TDeckNavigation>();

export const DeckNavigation = () => {
    const style = useStyle();

    return (
        <Stack.Navigator
            initialRouteName="decks"
            screenOptions={{
                headerShown: false,
                cardStyle: style.navigationCardBackground,
            }}
        >
            <Stack.Screen component={Decks} name="decks" />
        </Stack.Navigator>
    );
};
