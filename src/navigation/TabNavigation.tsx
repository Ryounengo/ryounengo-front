import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CardNavigation } from "./CardNavigation";
import { TBottomTabNavigation } from "./INavigation";
import { StackSettings } from "./StackSettings";
import { DeckNavigation } from "@navigation/DeckNavigation";
import { Home } from "@screens/Home/Home";
import { AddIcon, CircleIcon, QuestionIcon, useTheme, WarningIcon } from "native-base";

const Tab = createBottomTabNavigator<TBottomTabNavigation>();

export const BottomTabNavigation = () => {
    const { colors } = useTheme();
    const renderHomeIcon = () => <QuestionIcon />;
    const renderDeckIcon = () => <WarningIcon />;
    const renderCardIcon = () => <CircleIcon />;
    const renderSettingsIcon = () => <AddIcon />;

    return (
        <Tab.Navigator
            initialRouteName="home"
            tabBarOptions={{ showLabel: false, activeBackgroundColor: colors.warmGray[200] }}
        >
            <Tab.Screen component={Home} name="home" options={{ tabBarIcon: renderHomeIcon }} />
            <Tab.Screen component={DeckNavigation} name="deck" options={{ tabBarIcon: renderDeckIcon }} />
            <Tab.Screen component={CardNavigation} name="card" options={{ tabBarIcon: renderCardIcon }} />
            <Tab.Screen component={StackSettings} name="settings" options={{ tabBarIcon: renderSettingsIcon }} />
        </Tab.Navigator>
    );
};
