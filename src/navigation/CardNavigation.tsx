import { useTranslation } from "react-i18next";
import { createStackNavigator } from "@react-navigation/stack";
import { TCardNavigation } from "./INavigation";
import { Cards } from "@screens/Card/Cards";

const Stack = createStackNavigator<TCardNavigation>();

export const CardNavigation = () => {
    const { t } = useTranslation(["common", "card"]);

    return (
        <Stack.Navigator initialRouteName="cards">
            <Stack.Screen component={Cards} name="cards" options={{ title: t("card:cards") }} />
        </Stack.Navigator>
    );
};
