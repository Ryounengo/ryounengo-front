import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigation } from "./TabNavigation";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Login } from "../screens/Authentication/Login/Login";
import { TRootNavigation } from "./INavigation";

const Stack = createStackNavigator<TRootNavigation>();

export const RootNavigation = () => {
    const { user } = useContext(UserContext);

    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: { backgroundColor: "transparent" },
                cardOverlayEnabled: false,
            }}
        >
            {user && <Stack.Screen component={BottomTabNavigation} name="main" />}
            {!user && <Stack.Screen component={Login} name="login" />}
        </Stack.Navigator>
    );
};
