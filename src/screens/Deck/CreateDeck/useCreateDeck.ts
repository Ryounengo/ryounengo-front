import { useForm } from "react-hook-form";
import { DECK_ROUTE } from "@routes";
import { stateToRequest } from "@mappers/postDeckMapper";
import { IError, useCustomToast, useFetch } from "@common";
import { IDeckEditForm, IDeckSummaryResponse } from "@typings/interfaces";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TDeckNavigation } from "@navigation/INavigation";

type NavigationProps = NativeStackNavigationProp<TDeckNavigation, "createDeck">;

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
    const [postCreateDeckState, { post }] = useFetch();
    const { toastError, toastSuccessCreation } = useCustomToast();
    formMethods.register("tags");

    const submit = (formData: IDeckEditForm) =>
        post<IDeckSummaryResponse>(DECK_ROUTE, { body: stateToRequest(formData), forwardError: true })
            .then((response) => {
                toastSuccessCreation(formData.name);
                if (response) {
                    navigate("deckDetails", { deckId: response.id });
                }
            })
            .catch((error: IError) => toastError(error.message));

    return {
        formMethods,
        submit,
        postCreateDeckState,
    };
};
