import { Text, VStack } from "native-base";
import { useTranslation } from "react-i18next";
import { ICardSummary } from "@typings/interfaces";
import { CardSummary } from "@screens/Card/CardList/CardList/CardSummary";

interface IParams {
    cardList: ICardSummary[];
}

export const CardList = (props: IParams) => {
    const { t } = useTranslation("common");
    const { cardList } = props;

    return (
        <VStack space={4}>
            {cardList?.map((card) => (
                <CardSummary card={card} key={card.id} />
            ))}
            {cardList?.length === 0 && <Text>{t("common:noResults")}</Text>}
        </VStack>
    );
};
