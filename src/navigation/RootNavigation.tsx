import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigation } from "./TabNavigation";
import { useContext, Fragment } from "react";
import { UserContext } from "../context/UserContext";
import { Login } from "@screens/Authentication/Login/Login";
import { TRootNavigation } from "./INavigation";
import { Register } from "@screens/Authentication/Register/Register";
import { LostPassword } from "@screens/Authentication/LostPassword/LostPassword";
import { UpdatePassword } from "@screens/Authentication/LostPassword/UpdatePassword";

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
            {!user && (
                <Fragment>
                    <Stack.Screen component={Login} name="login" />
                    <Stack.Screen component={Register} name="register" />
                    <Stack.Screen component={LostPassword} name="lostPassword" />
                    <Stack.Screen component={UpdatePassword} name="updatePassword" />
                </Fragment>
            )}
        </Stack.Navigator>
    );
};
