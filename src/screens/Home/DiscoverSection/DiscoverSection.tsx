import { DeckList } from "@common";
import { IDeckFilter, IDeckSummary } from "@typings/interfaces";
import { Fragment } from "react";
import { Heading, Text } from "native-base";
import { TagList } from "@screens/Home/DiscoverSection/TagList";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { defaultPagination } from "@utils/pagination";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TBottomTabNavigation, TDeckNavigation, TRootNavigation } from "@navigation/INavigation";

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
            <Heading marginTop={2}>Most popular</Heading>
            <DeckList deckList={deckList} goToDetails={goToDetails} />
            <Text textAlign="center" underline onPress={goToDeckList}>
                {t("seeMore")}
            </Text>
            <Heading marginTop={2}>By theme</Heading>
            <TagList tagList={["test1", "test2"]} />
        </Fragment>
    );
};
