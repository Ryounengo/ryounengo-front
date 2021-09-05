import { useForm } from "react-hook-form";
import { DECK_ROUTE } from "@routes";
import { stateToRequest } from "@mappers/postDeckMapper";
import { IError, useCustomToast, useFetch } from "@common";
import { IDeckEditForm } from "@typings/interfaces";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TStackNavigation } from "@navigation/INavigation";

type NavigationProps = NativeStackNavigationProp<TStackNavigation, "createDeck">;

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
        post(DECK_ROUTE, { body: stateToRequest(formData), forwardError: true })
            .then(() => {
                toastSuccessCreation(formData.name);
                navigate("decks");
            })
            .catch((error: IError) => toastError(error.message));

    return {
        formMethods,
        submit,
        postCreateDeckState,
    };
};
