import { createStackNavigator } from "@react-navigation/stack";
import { TCardNavigation } from "./INavigation";
import { Cards } from "@screens/Card/Cards";
import { useStyle } from "@navigation/style";

const Stack = createStackNavigator<TCardNavigation>();

export const CardNavigation = () => {
    const style = useStyle();

    return (
        <Stack.Navigator
            initialRouteName="cards"
            screenOptions={{
                headerShown: false,
                cardStyle: style.navigationCardBackground,
            }}
        >
            <Stack.Screen component={Cards} name="cards" />
        </Stack.Navigator>
    );
};
