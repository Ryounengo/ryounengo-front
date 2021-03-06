import { IDeckFilter, IDeckSummary } from "@typings/interfaces";
import { Fragment } from "react";
import { Heading, Pressable, ScrollView, Text, View } from "native-base";
import { DeckSummary } from "@common/Deck/Summary/DeckSummary";
import { OutlinedIcon } from "@common/OutlinedIcon/OutlinedIcon";
import AddIcon from "@static/icons/add.svg";
import { NoResult } from "@common/NoResult/NoResult";
import { useStyle } from "@screens/Home/DiscoverSection/styles";
import { useTranslation } from "react-i18next";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { defaultPagination } from "@utils/pagination";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TBottomTabNavigation, TDeckNavigation, TLoggedNavigation } from "@navigation/INavigation";

interface IParams {
    deckList: IDeckSummary[];
}

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TBottomTabNavigation, "homeStack">,
    CompositeNavigationProp<NativeStackNavigationProp<TLoggedNavigation>, NativeStackNavigationProp<TDeckNavigation>>
>;

export const DiscoverSection = (props: IParams) => {
    const { deckList } = props;
    const style = useStyle();
    const { t } = useTranslation(["common", "home"]);
    const { push, navigate } = useNavigation<NavigationProps>();
    const mostPopularDeckQuery: IDeckFilter = {
        ...defaultPagination,
        isReviewed: false,
    };

    const goToDeckList = () => navigate("deck", { screen: "decks", params: { deckQuery: mostPopularDeckQuery } });
    const goToDetails = (deckId: string) => push("deckDetails", { deckId });

    return (
        <Fragment>
            <Heading marginLeft={4} marginTop={2}>
                {t("home:discover")}
            </Heading>
            <Text marginLeft={4} variant="caption">
                {t("home:discoverSubtitle")}
            </Text>
            <View style={style.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.deckList}>
                    {deckList.map((deck, index) => (
                        <Pressable
                            key={deck.id}
                            marginLeft={index === 0 ? style.firstDeck.marginLeft : undefined}
                            style={style.deck}
                            onPress={() => goToDetails(deck.id)}
                        >
                            <DeckSummary deck={deck} />
                        </Pressable>
                    ))}
                    {deckList?.length > 0 && (
                        <Pressable
                            alignContent="center"
                            alignItems="center"
                            justifyContent="center"
                            width={style.deck.width}
                            onPress={goToDeckList}
                        >
                            <OutlinedIcon
                                borderWidth={2}
                                color={style.discoverMore.color}
                                icon={AddIcon}
                                size={30}
                                style={style.discoverMore}
                            />
                            <Text color={style.discoverMore.color} style={style.discoverMore}>
                                {t("common:seeMore")}
                            </Text>
                        </Pressable>
                    )}
                </ScrollView>
                {deckList?.length === 0 && <NoResult />}
            </View>
        </Fragment>
    );
};
