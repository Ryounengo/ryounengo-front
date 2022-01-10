import { BottomTabNavigation } from "@navigation/TabNavigation/TabNavigation";
import { ChevronLeftIcon } from "native-base";
import { DeckEdit } from "@screens/Deck/DeckEdit/DeckEdit";
import { CardEdit } from "@screens/Card/EditCard/CardEdit";
import { DeckDetails } from "@screens/Deck/DeckDetails/DeckDetails";
import { Review } from "@screens/Card/Review/Review";
import { createStackNavigator } from "@react-navigation/stack";
import { TLoggedNavigation } from "@navigation/INavigation";
import { useTranslation } from "react-i18next";
import { useStyle } from "@navigation/style";

const Stack = createStackNavigator<TLoggedNavigation>();

export const LoggedNavigation = () => {
    const { t } = useTranslation(["deck", "card"]);
    const style = useStyle();

    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false, cardStyle: style.navigationCardBackground }}>
                <Stack.Screen component={BottomTabNavigation} name="main" />
            </Stack.Group>
            <Stack.Group
                screenOptions={{
                    presentation: "modal",
                    headerTitleStyle: style.navigationTitle,
                    cardStyle: style.navigationCardBackground,
                    headerStyle: style.headerBar,
                    // eslint-disable-next-line react/display-name
                    headerBackImage: (_props) => <ChevronLeftIcon style={style.navigationHeaderBackButton} />,
                }}
            >
                <Stack.Screen component={DeckEdit} name="editDeck" />
                <Stack.Screen component={CardEdit} name="editCard" options={{ title: t("card:createCard") }} />
                <Stack.Screen
                    component={DeckDetails}
                    name="deckDetails"
                    options={{
                        title: t("deck:deckDetails"),
                        headerTransparent: true,
                    }}
                />
                <Stack.Screen component={Review} name="reviewCards" options={{ title: t("card:reviewCards") }} />
            </Stack.Group>
        </Stack.Navigator>
    );
};
