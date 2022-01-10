import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";
import { UserContext } from "@context";
import { Login } from "@screens/Authentication/Login/Login";
import { TRootNavigation } from "./INavigation";
import { Register } from "@screens/Authentication/Register/Register";
import { LostPassword } from "@screens/Authentication/LostPassword/LostPassword";
import { UpdatePassword } from "@screens/Authentication/LostPassword/UpdatePassword";
import { DrawerNavigation } from "@navigation/DrawerNavigation/DrawerNavigation";

const Stack = createStackNavigator<TRootNavigation>();

export const RootNavigation = () => {
    const { user } = useContext(UserContext);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user && <Stack.Screen component={DrawerNavigation} name="drawerStack" />}
            {!user && (
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen component={Login} name="login" />
                    <Stack.Screen component={Register} name="register" />
                    <Stack.Screen component={LostPassword} name="lostPassword" />
                    <Stack.Screen component={UpdatePassword} name="updatePassword" />
                </Stack.Group>
            )}
        </Stack.Navigator>
    );
};
