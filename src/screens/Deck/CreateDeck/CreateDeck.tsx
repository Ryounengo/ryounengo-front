import { createStackNavigator } from "@react-navigation/stack";
import { DeckType } from "./DeckType";
import { DeckEdit } from "./DeckEdit";
import { useTranslation } from "react-i18next";
import { TCreateDeckStackParams } from "./ICreateDeck";

const Stack = createStackNavigator<TCreateDeckStackParams>();

export const CreateDeck = () => {
    const { t } = useTranslation("deck");

    return (
        <Stack.Navigator initialRouteName="deckType">
            <Stack.Screen component={DeckType} name="deckType" options={{ title: t("deck:chooseDeckType") }} />
            <Stack.Screen component={DeckEdit} name="deckEdit" options={{ title: t("deck:createDeck") }} />
        </Stack.Navigator>
    );
};
