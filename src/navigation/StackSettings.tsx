import { useTranslation } from "react-i18next";
import { createStackNavigator } from "@react-navigation/stack";
import { TStackSettings } from "./INavigation";
import { UserSettings } from "../screens/Settings/UserSettings";

const Stack = createStackNavigator<TStackSettings>();

export const StackSettings = () => {
    const { t } = useTranslation("user");

    return (
        <Stack.Navigator initialRouteName="user">
            <Stack.Screen component={UserSettings} name="user" options={{ title: t("user") }} />
        </Stack.Navigator>
    );
};
