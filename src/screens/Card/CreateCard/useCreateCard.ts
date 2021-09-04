import { IError, useFetch, useCustomToast } from "@common";
import { getDeckAddCardRoute } from "@routes";
import { ICardEdit } from "@typings/interfaces";
import { stateToRequest } from "@mappers/postCardMapper";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TStackNavigation } from "@navigation/INavigation";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<TStackNavigation, "createCard">;

export const useCreateCard = (deckId: string) => {
    const [postCreateCardState, { post }] = useFetch();
    const { navigate } = useNavigation<NavigationProps>();
    const { toastSuccessCreation, toastError } = useCustomToast();

    const submit = (formData: ICardEdit) => {
        post(getDeckAddCardRoute(deckId), { body: stateToRequest(formData), forwardError: true })
            .then(() => {
                toastSuccessCreation(formData.front[0]);
                navigate("deckDetails", { deckId });
            })
            .catch((error: IError) => toastError(error.message));
    };

    return {
        postCreateCardState,
        submit,
    };
};
