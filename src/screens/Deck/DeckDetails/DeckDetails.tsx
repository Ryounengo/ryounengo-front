import { useDeckDetails } from "./useDeckDetails";
import { TRootNavigation } from "@navigation/INavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { ScrollView, View, Text, Heading, useDisclose, Actionsheet, IconButton } from "native-base";
import { useTranslation } from "react-i18next";
import { ErrorAndLoading } from "@common/ErrorAndLoading";
import { useStyle } from "./style";
import { CardList } from "@screens/Card/CardList/CardList/CardList";
import ThreeDotsIcon from "@static/images/3dots.svg";

type Params = StackScreenProps<TRootNavigation, "deckDetails">;

export const DeckDetails = (props: Params) => {
    const { route } = props;
    const { params } = route;
    const { t } = useTranslation(["common", "deck"]);

    const { deckDetails, deleteDeck, updateDeck, error } = useDeckDetails(params.deckId);
    const { isOpen, onOpen, onClose } = useDisclose();
    const style = useStyle({ deckId: deckDetails?.id });

    return (
        <View>
            <View style={style.background} />
            <IconButton
                icon={
                    <ThreeDotsIcon
                        color={style.actionButton.color}
                        height={style.actionButton.height}
                        width={style.actionButton.width}
                    />
                }
                style={style.actionButton}
                onPress={onOpen}
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
                    <Heading marginLeft={4} marginTop={4}>
                        {t("totalResult", { count: deckDetails?.cards?.length ?? 0 })}
                    </Heading>
                    <CardList cardList={deckDetails?.cards} />
                </ErrorAndLoading>
            </ScrollView>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
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
