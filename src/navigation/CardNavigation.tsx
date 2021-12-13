import { createStackNavigator } from "@react-navigation/stack";
import { TCardNavigation } from "./INavigation";
import { Cards } from "@screens/Card/Cards";

const Stack = createStackNavigator<TCardNavigation>();

export const CardNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="cards">
            <Stack.Screen component={Cards} name="cards" />
        </Stack.Navigator>
    );
};
