import { IError, useFetch, useCustomToast } from "@common";
import { getDeckAddCardRoute } from "@routes";
import { ICardEdit } from "@typings/interfaces";
import { stateToRequest } from "@mappers/postCardMapper";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { useNavigation } from "@react-navigation/native";
import { TDeckNavigation } from "@navigation/INavigation";

type NavigationProps = NativeStackNavigationProp<TDeckNavigation, "createCard">;

export const useCreateCard = (deckId: string) => {
    const [postCreateCardState, { post }] = useFetch();
    const { replace } = useNavigation<NavigationProps>();
    const { toastSuccessCreation, toastError } = useCustomToast();

    const submit = (formData: ICardEdit) => {
        post(getDeckAddCardRoute(deckId), { body: stateToRequest(formData), forwardError: true })
            .then(() => {
                toastSuccessCreation(formData.front[0]);
                replace("createCard", { deckId: deckId });
            })
            .catch((error: IError) => toastError(error.message));
    };

    return {
        postCreateCardState,
        submit,
    };
};
