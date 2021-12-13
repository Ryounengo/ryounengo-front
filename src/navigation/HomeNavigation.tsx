import { createStackNavigator } from "@react-navigation/stack";
import { useStyle } from "./style";
import { Home } from "@screens/Home/Home";
import { THomeNavigation } from "@navigation/INavigation";

const Stack = createStackNavigator<THomeNavigation>();

export const HomeNavigation = () => {
    const style = useStyle();

    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                cardStyle: style.navigationCardBackground,
            }}
        >
            <Stack.Screen component={Home} name="home" />
        </Stack.Navigator>
    );
};
