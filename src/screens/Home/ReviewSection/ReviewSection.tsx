import { IDeckSummary } from "@typings/interfaces";
import { Heading, Pressable, ScrollView, Text, View } from "native-base";
import { useStyle } from "@screens/Home/ReviewSection/styles";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { THomeNavigation, TRootNavigation } from "@navigation/INavigation";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import { DeckSummary } from "@common/Deck/Summary/DeckSummary";
import { NoResult } from "@common/NoResult/NoResult";

interface IParams {
    deckList: IDeckSummary[];
}

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<THomeNavigation, "home">,
    NativeStackNavigationProp<TRootNavigation>
>;

export const ReviewSection = (props: IParams) => {
    const { deckList } = props;
    const style = useStyle();
    const { t } = useTranslation(["common", "home"]);
    const { push } = useNavigation<NavigationProps>();

    const goToReview = (deckId: string) => push("reviewCards", { deckId });

    return (
        <Fragment>
            <Heading marginLeft={4} marginTop={2}>
                {t("home:review")}
            </Heading>
            <Text marginLeft={4} variant="caption">
                {t("home:reviewSubtitle")}
            </Text>
            <View style={style.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.deckList}>
                    {deckList.map((deck, index) => (
                        <Pressable
                            key={deck.id}
                            marginLeft={index === 0 ? style.firstDeck.marginLeft : undefined}
                            style={style.deck}
                            onPress={() => goToReview(deck.id)}
                        >
                            <DeckSummary deck={deck} />
                        </Pressable>
                    ))}
                </ScrollView>
                {deckList?.length === 0 && <NoResult />}
            </View>
        </Fragment>
    );
};
