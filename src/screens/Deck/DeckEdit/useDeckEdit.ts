import { useForm } from "react-hook-form";
import { DECK_ROUTE, getDeckRoute } from "@routes";
import { stateToRequest } from "@mappers/postDeckMapper";
import { IDeckEditForm, IDeckSummary, IDeckSummaryResponse } from "@typings/interfaces";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TRootNavigation } from "@navigation/INavigation";
import { usePostApi, usePutApi } from "@hooks/api";
import { useCustomToast } from "@hooks/useCustomToast";

type NavigationProps = NativeStackNavigationProp<TRootNavigation, "editDeck">;

export const useDeckEdit = (deck?: IDeckSummary) => {
    const { navigate, goBack } = useNavigation<NavigationProps>();
    const formMethods = useForm<IDeckEditForm>({
        defaultValues: {
            name: deck?.name ?? "",
            description: deck?.description ?? "",
            tags: deck?.tags.join(",") ?? "",
            isPrivate: deck?.isPrivate ?? true,
            isDefaultReversed: false,
        },
    });
    const { update: postUpdate, isLoading: isPostLoading } = usePostApi<IDeckSummaryResponse>();
    const { update: putUpdate, isLoading: isPutLoading } = usePutApi<boolean>();
    const { toastError, toastSuccessCreation, toastSuccessUpdate } = useCustomToast();

    const submit = (formData: IDeckEditForm) =>
        deck
            ? putUpdate(getDeckRoute(deck.id), stateToRequest(formData))
                  .then((response) => {
                      if (response) {
                          toastSuccessUpdate(formData.name);
                          goBack();
                      }
                  })
                  .catch((error) => toastError(error.message))
            : postUpdate(DECK_ROUTE, stateToRequest(formData))
                  .then((response) => {
                      if (response) {
                          toastSuccessCreation(formData.name);
                          navigate("deckDetails", { deckId: response.id });
                      }
                  })
                  .catch((error) => toastError(error.message));

    return {
        formMethods,
        submit,
        isLoading: isPostLoading || isPutLoading,
    };
};
