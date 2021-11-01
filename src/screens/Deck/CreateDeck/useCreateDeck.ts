import { useForm } from "react-hook-form";
import { DECK_ROUTE } from "@routes";
import { stateToRequest } from "@mappers/postDeckMapper";
import { useCustomToast, usePostApi } from "@common";
import { IDeckEditForm, IDeckSummaryResponse } from "@typings/interfaces";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TRootNavigation } from "@navigation/INavigation";

type NavigationProps = NativeStackNavigationProp<TRootNavigation, "createDeck">;

export const useCreateDeck = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const formMethods = useForm<IDeckEditForm>({
        defaultValues: {
            name: "",
            description: "",
            tags: "",
            isPrivate: false,
        },
    });
    const { update, isLoading } = usePostApi<IDeckSummaryResponse>();
    const { toastError, toastSuccessCreation } = useCustomToast();
    formMethods.register("tags");

    const submit = (formData: IDeckEditForm) =>
        update(DECK_ROUTE, stateToRequest(formData))
            .then((response) => {
                toastSuccessCreation(formData.name);
                if (response) {
                    navigate("deckDetails", { deckId: response.id });
                }
            })
            .catch((error) => toastError(error.message));

    return {
        formMethods,
        submit,
        isLoading,
    };
};
