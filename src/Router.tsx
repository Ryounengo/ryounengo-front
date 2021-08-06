import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./screens/Authentication/Login/Login";
import { Home } from "./screens/Home/Home";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

type TRouterStackParams = {
    home: undefined;
    login: undefined;
};

const Stack = createStackNavigator<TRouterStackParams>();

export const Router = () => {
    const { user } = useContext(UserContext);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user && <Stack.Screen component={Home} name="home" />}
            {!user && <Stack.Screen component={Login} name="login" />}
        </Stack.Navigator>
    );
};
