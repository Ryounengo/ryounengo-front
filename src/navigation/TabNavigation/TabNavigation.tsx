import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CardNavigation } from "../CardNavigation";
import { TBottomTabNavigation, TLoggedNavigation } from "../INavigation";
import { DeckNavigation } from "@navigation/DeckNavigation";
import { useTheme } from "native-base";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { AppIcon } from "@common/AppIcon";
import { UserAvatar } from "@common/User";
import DeckNav from "@static/icons/deck-nav.svg";
import CardNav from "@static/icons/card-nav.svg";
import HomeNav from "@static/icons/home.svg";
import { NavIcon } from "@navigation/TabNavigation/NavIcon";
import { useTranslation } from "react-i18next";
import { useStyle } from "../style";
import { HomeNavigation } from "@navigation/HomeNavigation";

const Tab = createBottomTabNavigator<TBottomTabNavigation>();

type NavigationProps = CompositeNavigationProp<
    BottomTabNavigationProp<TLoggedNavigation, "main">,
    BottomTabNavigationProp<TBottomTabNavigation>
>;

export const BottomTabNavigation = () => {
    const { space } = useTheme();
    const { t } = useTranslation("navigation");
    const { navigate } = useNavigation<NavigationProps>();
    const style = useStyle();

    const renderTabIcon = (route: keyof TBottomTabNavigation, isFocused: boolean) => {
        let icon;

        switch (route) {
            case "homeStack":
                icon = HomeNav;
                break;
            case "deck":
                icon = DeckNav;
                break;
            case "card":
            default:
                icon = CardNav;
                break;
        }

        return <NavIcon icon={icon} isFocused={isFocused} />;
    };

    const goToHome = () => navigate("homeStack", { screen: "home" });

    return (
        <Tab.Navigator
            initialRouteName="homeStack"
            screenListeners={({ navigation }) => ({
                blur: () => navigation.setParams({ screen: undefined, params: undefined }),
            })}
            screenOptions={({ route }) => ({
                title: t(route.name),
                unmountOnBlur: true,
                tabBarStyle: style.navigationTabBar,
                headerStyle: style.headerBar,
                // eslint-disable-next-line react/display-name
                headerTitle: () => <AppIcon height={40} width={35} onPress={goToHome} />,
                headerRight: UserAvatar,
                headerRightContainerStyle: { right: space[2] },
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => renderTabIcon(route.name, focused),
            })}
        >
            <Tab.Screen component={HomeNavigation} name="homeStack" />
            <Tab.Screen component={DeckNavigation} name="deck" />
            <Tab.Screen component={CardNavigation} name="card" />
        </Tab.Navigator>
    );
};
