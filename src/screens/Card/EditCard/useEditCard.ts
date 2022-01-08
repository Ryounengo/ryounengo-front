import { useState } from "react";
import { useForm } from "react-hook-form";
import { getDeckAddCardRoute } from "@routes";
import { stateToRequest } from "@mappers/postCardMapper";
import { usePostApi } from "@hooks/api";
import { useNavigation } from "@react-navigation/native";
import { useCustomToast } from "@hooks/useCustomToast";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TRootNavigation } from "@navigation/INavigation";
import { ICard, IDeckSummary } from "@typings/interfaces";
import { ICardEditForm } from "@screens/Card/EditCard/ICardEdit";
import { EEditCardStep } from "@screens/Card/EditCard/ICreateCard";

type NavigationProps = NativeStackNavigationProp<TRootNavigation, "editCard">;

export const useEditCard = (deck: IDeckSummary, card?: ICard) => {
    const { isLoading, update } = usePostApi();
    const { replace } = useNavigation<NavigationProps>();
    const { toastSuccessCreation, toastError } = useCustomToast();
    const [step, setStep] = useState<EEditCardStep>(EEditCardStep.RECTO);
    const goToNextStep = () => setStep((previousStep) => previousStep + 1);

    const formMethods = useForm<ICardEditForm>({
        defaultValues: {
            type: {
                isReversed: deck.defaultReviewReverseCard,
                cardType: deck.defaultCardType,
            },
            front: {
                mainText: card?.front[0] ?? "",
                secondaryText: card?.front[1] ?? "",
                optionalText: card?.front[2] ?? "",
                exampleText: card?.example ?? "",
            },
            back: {
                mainText: card?.back[0] ?? "",
                optionalText: card?.back[1] ?? "",
            },
        },
    });
    const { handleSubmit, trigger } = formMethods;

    const submitType = async () => {
        if (await trigger(["type.cardType", "type.isReversed"])) {
            goToNextStep();
        }
    };

    const submitRecto = async () => {
        if (await trigger(["front.mainText", "front.secondaryText", "front.optionalText", "front.exampleText"])) {
            goToNextStep();
        }
    };

    const submit = handleSubmit((formData) => {
        update(getDeckAddCardRoute(deck.id), stateToRequest(formData))
            .then(() => {
                toastSuccessCreation(formData.front.mainText);
                replace("editCard", { deck });
            })
            .catch((error) => toastError(error.message));
    });

    return {
        step,
        isLoading,
        submit,
        submitRecto,
        submitType,
        formMethods,
        setStep,
    };
};
