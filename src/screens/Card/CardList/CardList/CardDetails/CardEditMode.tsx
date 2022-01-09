import { Box, Stack, Text } from "native-base";
import CardIcon from "@static/images/card-nav.svg";
import { useStyle } from "./style";
import { ICard, IError } from "@typings/interfaces";
import RemoveIcon from "@static/images/remove.svg";
import EditIcon from "@static/images/edit.svg";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { TCardNavigation, TRootNavigation } from "@navigation/INavigation";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { useDeleteApi } from "@hooks/api";
import { useCustomToast } from "@hooks/useCustomToast";
import { getCardDetailsRoute } from "@routes";
import { TouchableOpacity, View } from "react-native";

interface IParams {
    card: ICard;
    refresh(): void;
    setCardDetails(cardDetails?: ICard): void;
}

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TCardNavigation, "cards">,
    NativeStackNavigationProp<TRootNavigation>
>;
export const CardEditMode = (props: IParams) => {
    const { card, setCardDetails, refresh } = props;
    const style = useStyle({ toReview: card.toReview });
    const { remove } = useDeleteApi();
    const { toastError } = useCustomToast();

    const deleteCard = () => {
        remove(getCardDetailsRoute(card.id))
            .then(() => {
                setCardDetails(undefined);
                refresh();
            })
            .catch((error: IError) => toastError(error.message));
    };

    const { navigate } = useNavigation<NavigationProps>();

    const goToEdit = () => {
        setCardDetails(undefined);
        navigate("editCard", { deckId: card.deck, card });
    };

    return (
        <View style={style.container}>
            <View style={style.cardBackground} />
            <CardIcon height={style.cardIcon.height} style={style.cardIcon} width={style.cardIcon.width} />
            <View style={style.card}>
                <Stack space={10} style={style.optionItems}>
                    <TouchableOpacity onPress={deleteCard}>
                        <Box alignItems="center" flexDirection="row">
                            <RemoveIcon color={style.delete.color} height={40} viewBox="0 -2 30 30" width={40} />
                            <Text color={style.delete.color} fontSize={30} ml={4}>
                                Delete card
                            </Text>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToEdit}>
                        <Box flexDirection="row">
                            <EditIcon color={style.edit.color} height={40} viewBox="0 -2 30 30" width={40} />
                            <Text color={style.edit.color} fontSize={30} ml={4}>
                                Edit card
                            </Text>
                        </Box>
                    </TouchableOpacity>
                </Stack>
            </View>
        </View>
    );
};
