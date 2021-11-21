import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CardNavigation } from "../CardNavigation";
import { TBottomTabNavigation, TRootNavigation } from "../INavigation";
import { DeckNavigation } from "@navigation/DeckNavigation";
import { Home } from "@screens/Home/Home";
import { useTheme } from "native-base";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { AppIcon } from "@common/AppIcon";
import { UserAvatar } from "@common/User";
import DeckNav from "@static/images/deck-nav.svg";
import CardNav from "@static/images/card-nav.svg";
import HomeNav from "@static/images/home.svg";
import { NavIcon } from "@navigation/TabNavigation/NavIcon";
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator<TBottomTabNavigation>();

type NavigationProps = CompositeNavigationProp<
    BottomTabNavigationProp<TRootNavigation, "main">,
    BottomTabNavigationProp<TBottomTabNavigation>
>;

export const BottomTabNavigation = () => {
    const { space } = useTheme();
    const { t } = useTranslation("navigation");
    const { navigate } = useNavigation<NavigationProps>();

    const renderTabIcon = (route: string, isFocused: boolean) => {
        let icon;

        switch (route) {
            case "home":
                icon = HomeNav;
                break;
            case "deck":
                icon = DeckNav;
                break;
            case "card":
                icon = CardNav;
                break;
            default:
                icon = DeckNav;
        }

        return <NavIcon icon={icon} isFocused={isFocused} />;
    };

    const goToHome = () => navigate("home");

    return (
        <Tab.Navigator
            initialRouteName="home"
            screenListeners={({ navigation }) => ({
                blur: () => navigation.setParams({ screen: undefined, params: undefined }),
            })}
            screenOptions={({ route }) => ({
                title: t(route.name),
                unmountOnBlur: true,
                headerStyle: {
                    elevation: 0, // remove shadow on Android
                    shadowOpacity: 0, // remove shadow on iOS
                },
                // eslint-disable-next-line react/display-name
                headerTitle: () => <AppIcon height={40} width={35} onPress={goToHome} />,
                headerRight: UserAvatar,
                headerRightContainerStyle: { right: space[2] },
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => renderTabIcon(route.name, focused),
            })}
        >
            <Tab.Screen component={Home} name="home" />
            <Tab.Screen component={DeckNavigation} name="deck" />
            <Tab.Screen component={CardNavigation} name="card" />
        </Tab.Navigator>
    );
};