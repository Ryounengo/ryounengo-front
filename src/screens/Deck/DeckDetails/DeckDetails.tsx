import { useDeckDetails } from "./useDeckDetails";
import { TRootNavigation } from "@navigation/INavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { ScrollView, View, Text, Heading, useDisclose, Actionsheet, ChevronLeftIcon, Box } from "native-base";
import { useTranslation } from "react-i18next";
import { ErrorAndLoading } from "@common/ErrorAndLoading";
import { useStyle } from "./style";
import { useStyle as useNavigationStyle } from "@navigation/style";
import { CardList } from "@screens/Card/CardList/CardList/CardList";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { RightActionButton } from "@common/Navigation/RightActionButton";
import { lightenColor } from "@utils/color";

type Params = StackScreenProps<TRootNavigation, "deckDetails">;

export const DeckDetails = (props: Params) => {
    const { route } = props;
    const { params } = route;
    const { t } = useTranslation(["common", "deck"]);
    const { setOptions } = useNavigation();

    const { deckDetails, deleteDeck, updateDeck, error } = useDeckDetails(params.deckId);
    const { isOpen, onOpen, onClose } = useDisclose();
    const style = useStyle({ deckId: deckDetails?.id });
    const navigationStyle = useNavigationStyle();

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
        <View>
            <Box
                bg={{
                    linearGradient: {
                        colors: [style.background.backgroundColor, lightenColor(style.background.backgroundColor, 20)],
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
                    {deckDetails?.cards?.length !== undefined && deckDetails?.cards.length > 0 && (
                        <Heading marginLeft={4} marginTop={4}>
                            {t("totalResult", { count: deckDetails?.cards.length })}
                        </Heading>
                    )}
                    <CardList cardList={deckDetails?.cards} />
                </ErrorAndLoading>
            </ScrollView>
            <Actionsheet hideDragIndicator isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Actionsheet.Item>{t("common:edit")}</Actionsheet.Item>
                    <Actionsheet.Item onPress={deleteDeck}>{t("common:remove")}</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => updateDeck({ isPrivate: false })}>
                        {t("deck:publish")}
                    </Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </View>
    );
};
