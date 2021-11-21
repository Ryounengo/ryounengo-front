import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CardNavigation } from "./CardNavigation";
import { TBottomTabNavigation, TRootNavigation } from "./INavigation";
import { DeckNavigation } from "@navigation/DeckNavigation";
import { Home } from "@screens/Home/Home";
import { CircleIcon, QuestionIcon, useTheme, WarningIcon } from "native-base";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { Icon } from "@common/Icon";
import { UserAvatar } from "@common/User";

const Tab = createBottomTabNavigator<TBottomTabNavigation>();

type NavigationProps = CompositeNavigationProp<
    BottomTabNavigationProp<TRootNavigation, "main">,
    BottomTabNavigationProp<TBottomTabNavigation>
>;

export const BottomTabNavigation = () => {
    const { colors, space } = useTheme();
    const { navigate } = useNavigation<NavigationProps>();
    const renderHomeIcon = () => <QuestionIcon />;
    const renderDeckIcon = () => <WarningIcon />;
    const renderCardIcon = () => <CircleIcon />;

    const goToHome = () => navigate("home");

    return (
        <Tab.Navigator
            initialRouteName="home"
            screenListeners={({ navigation }) => ({
                blur: () => navigation.setParams({ screen: undefined, params: undefined }),
            })}
            screenOptions={{
                tabBarActiveTintColor: colors.warmGray[200],
                unmountOnBlur: true,
                headerStyle: {
                    elevation: 0, // remove shadow on Android
                    shadowOpacity: 0, // remove shadow on iOS
                },
                // eslint-disable-next-line react/display-name
                headerTitle: () => <Icon height={40} width={35} onPress={goToHome} />,
                headerRight: UserAvatar,
                headerRightContainerStyle: { right: space[2] },
            }}
        >
            <Tab.Screen component={Home} name="home" options={{ tabBarIcon: renderHomeIcon }} />
            <Tab.Screen component={DeckNavigation} name="deck" options={{ tabBarIcon: renderDeckIcon }} />
            <Tab.Screen component={CardNavigation} name="card" options={{ tabBarIcon: renderCardIcon }} />
        </Tab.Navigator>
    );
};
