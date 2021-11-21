import { IDeckFilter, IDeckSummary } from "@typings/interfaces";
import { Fragment } from "react";
import { Heading, Text } from "native-base";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { defaultPagination } from "@utils/pagination";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TBottomTabNavigation, TDeckNavigation, TRootNavigation } from "@navigation/INavigation";
import { DeckList } from "@common/Deck";

interface IParams {
    deckList: IDeckSummary[];
}

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TBottomTabNavigation, "home">,
    CompositeNavigationProp<NativeStackNavigationProp<TRootNavigation>, NativeStackNavigationProp<TDeckNavigation>>
>;

export const DiscoverSection = (props: IParams) => {
    const { deckList } = props;
    const { navigate } = useNavigation<NavigationProps>();
    const { t } = useTranslation();

    const mostPopularDeckQuery: IDeckFilter = {
        ...defaultPagination,
        isPrivate: false,
    };

    const goToDetails = (deckId: string) => navigate("deckDetails", { deckId });
    const goToDeckList = () => navigate("deck", { screen: "decks", params: { deckQuery: mostPopularDeckQuery } });

    return (
        <Fragment>
            <Heading marginTop={2}>Discover</Heading>
            <DeckList deckList={deckList} goToDetails={goToDetails} />
            <Text textAlign="center" underline onPress={goToDeckList}>
                {t("seeMore")}
            </Text>
        </Fragment>
    );
};
