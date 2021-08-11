import { Pressable, Text, VStack } from "native-base";
import { DeckSummary } from "./DeckSummary";
import { IDeck } from "../../IDeck";
import { useTranslation } from "react-i18next";

interface IParams {
    deckList: IDeck[];
}

export const DeckList = (props: IParams) => {
    const { t } = useTranslation("common");
    const { deckList } = props;

    return (
        <VStack space={4}>
            {deckList?.map((deck) => (
                // eslint-disable-next-line no-console
                <Pressable key={deck.id} onPress={() => console.log(`go to ${deck.id} ${deck.name} `)}>
                    <DeckSummary deck={deck} />
                </Pressable>
            ))}
            {deckList?.length === 0 && <Text>{t("noResults")}</Text>}
        </VStack>
    );
};
