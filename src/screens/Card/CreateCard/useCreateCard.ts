import { getDeckAddCardRoute } from "@routes";
import { ICardEdit } from "@typings/interfaces";
import { stateToRequest } from "@mappers/postCardMapper";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { useNavigation } from "@react-navigation/native";
import { TRootNavigation } from "@navigation/INavigation";
import { usePostApi } from "@hooks/api";
import { useCustomToast } from "@hooks/useCustomToast";

type NavigationProps = NativeStackNavigationProp<TRootNavigation, "createCard">;

export const useCreateCard = (deckId: string) => {
    const { isLoading, update } = usePostApi();
    const { replace } = useNavigation<NavigationProps>();
    const { toastSuccessCreation, toastError } = useCustomToast();

    const submit = (formData: ICardEdit) => {
        update(getDeckAddCardRoute(deckId), stateToRequest(formData))
            .then(() => {
                toastSuccessCreation(formData.front[0]);
                replace("createCard", { deckId: deckId });
            })
            .catch((error) => toastError(error.message));
    };

    return {
        isLoading,
        submit,
    };
};
