import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigation } from "./TabNavigation";
import { Fragment, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Login } from "@screens/Authentication/Login/Login";
import { TRootNavigation } from "./INavigation";
import { Register } from "@screens/Authentication/Register/Register";
import { LostPassword } from "@screens/Authentication/LostPassword/LostPassword";
import { UpdatePassword } from "@screens/Authentication/LostPassword/UpdatePassword";
import { CreateDeck } from "@screens/Deck/CreateDeck/CreateDeck";
import { CreateCard } from "@screens/Card/CreateCard/CreateCard";
import { DeckDetails } from "@screens/Deck/DeckDetails/DeckDetails";
import { useTranslation } from "react-i18next";

const Stack = createStackNavigator<TRootNavigation>();

export const RootNavigation = () => {
    const { user } = useContext(UserContext);
    const { t } = useTranslation(["deck", "card"]);

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: "transparent" },
                cardOverlayEnabled: false,
            }}
        >
            {user && (
                <Fragment>
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen component={BottomTabNavigation} name="main" />
                    </Stack.Group>
                    <Stack.Group screenOptions={{ presentation: "modal" }}>
                        <Stack.Screen
                            component={CreateDeck}
                            name="createDeck"
                            options={{ title: t("deck:createDeck") }}
                        />
                        <Stack.Screen
                            component={CreateCard}
                            name="createCard"
                            options={{ title: t("card:createCard") }}
                        />
                        <Stack.Screen
                            component={DeckDetails}
                            name="deckDetails"
                            options={{ title: t("deck:deckDetails") }}
                        />
                    </Stack.Group>
                </Fragment>
            )}
            {!user && (
                <Stack.Group>
                    <Stack.Screen component={Login} name="login" />
                    <Stack.Screen component={Register} name="register" />
                    <Stack.Screen component={LostPassword} name="lostPassword" />
                    <Stack.Screen component={UpdatePassword} name="updatePassword" />
                </Stack.Group>
            )}
        </Stack.Navigator>
    );
};
