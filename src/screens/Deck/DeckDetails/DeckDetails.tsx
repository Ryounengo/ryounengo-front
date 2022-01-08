import { useDeckDetails } from "./useDeckDetails";
import { TRootNavigation } from "@navigation/INavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { ScrollView, View, Text, Heading, useDisclose, Actionsheet, ChevronLeftIcon, Box, Fab } from "native-base";
import { useTranslation } from "react-i18next";
import { ErrorAndLoading } from "@common/ErrorAndLoading";
import { useStyle } from "./style";
import { useStyle as useNavigationStyle } from "@navigation/style";
import { CardList } from "@screens/Card/CardList/CardList/CardList";
import { useEffect } from "react";
import { RightActionButton } from "@common/Navigation/RightActionButton";
import { lightenColor } from "@utils/color";
import { deckToSummary } from "@utils/deckUtils";

type Params = StackScreenProps<TRootNavigation, "deckDetails">;

export const DeckDetails = (props: Params) => {
    const { route, navigation } = props;
    const { params } = route;
    const { t } = useTranslation(["common", "deck", "card"]);
    const { setOptions, push } = navigation;
    const { deckDetails, deleteDeck, updateDeck, error, isValidating, joinDeck, leaveDeck } = useDeckDetails(
        params.deckId
    );
    const { isOpen, onOpen, onClose } = useDisclose();
    const style = useStyle({ deckId: deckDetails?.id });
    const navigationStyle = useNavigationStyle();
    const goToEditDeck = () => {
        onClose();
        push("editDeck", { deck: deckDetails ? deckToSummary(deckDetails) : undefined });
    };

    const goToCreateCard = () => {
        if (deckDetails) {
            push("editCard", { deck: deckToSummary(deckDetails) });
        }
    };

    useEffect(() => {
        setOptions({
            // eslint-disable-next-line react/display-name
            headerRight: () => (
                <RightActionButton
                    _icon={{ color: style.deckName.color }}
                    _pressed={style.actionButton}
                    onPress={onOpen}
                />
            ),
            headerTitleStyle: { ...navigationStyle.navigationTitle, color: style.deckName.color },
            // eslint-disable-next-line react/display-name
            headerBackImage: () => (
                <ChevronLeftIcon
                    style={{ ...navigationStyle.navigationHeaderBackButton, color: style.deckName.color }}
                />
            ),
        });
    }, [navigationStyle, onOpen, setOptions, style.actionButton, style.deckName.color]);

    return (
        <ErrorAndLoading error={error} isLoading={isValidating && !deckDetails}>
            <View>
                <Box
                    bg={{
                        linearGradient: {
                            colors: [
                                style.background.backgroundColor,
                                lightenColor(style.background.backgroundColor, 20),
                            ],
                            start: [0, 0],
                            end: [1, 0.5],
                        },
                    }}
                    style={style.background}
                />
                <View style={style.container}>
                    <View style={style.item}>
                        <Heading style={style.deckName}>{deckDetails?.name}</Heading>
                        <Text style={style.tags}>{deckDetails?.tags.join(", ")}</Text>
                    </View>
                    <View style={[style.item, style.reviewCountContainer]}>
                        <Text style={style.reviewCount}>{t("deck:reviewedXTimes", { count: 0 })}</Text>
                    </View>
                </View>
                <ScrollView>
                    <ErrorAndLoading error={error} isLoading={!deckDetails}>
                        {deckDetails?.cards && deckDetails?.cards.totalElements > 0 && (
                            <Heading marginLeft={4} marginTop={4}>
                                {t("totalResult", { count: deckDetails?.cards.totalElements })}
                            </Heading>
                        )}
                        <CardList cardList={deckDetails?.cards.content} />
                    </ErrorAndLoading>
                </ScrollView>
                <Actionsheet hideDragIndicator isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content>
                        {deckDetails?.isOwn && (
                            <>
                                <Actionsheet.Item onPress={goToEditDeck}>{t("common:edit")}</Actionsheet.Item>
                                <Actionsheet.Item onPress={() => deleteDeck().then(onClose)}>
                                    {t("common:remove")}
                                </Actionsheet.Item>
                                <Actionsheet.Item onPress={() => updateDeck({ isPrivate: false }).then(onClose)}>
                                    {t("deck:publish")}
                                </Actionsheet.Item>
                            </>
                        )}
                        {deckDetails?.isReviewed && !deckDetails.isOwn && (
                            <Actionsheet.Item onPress={() => leaveDeck().then(onClose)}>
                                {t("deck:leaveDeck")}
                            </Actionsheet.Item>
                        )}
                        {!deckDetails?.isReviewed && !deckDetails?.isOwn && (
                            <Actionsheet.Item onPress={() => joinDeck().then(onClose)}>
                                {t("deck:joinDeck")}
                            </Actionsheet.Item>
                        )}
                    </Actionsheet.Content>
                </Actionsheet>
            </View>
            {deckDetails?.isOwn && <Fab label={t("card:createCard")} padding={2} onPress={goToCreateCard} />}
        </ErrorAndLoading>
    );
};
