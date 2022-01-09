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
import { ECardType } from "@typings/enums";

interface IParams {
    deck?: IDeckSummary;
    card?: ICard;
    deckId?: string;
}

type NavigationProps = NativeStackNavigationProp<TRootNavigation, "editCard">;

export const useEditCard = (props: IParams) => {
    const { card, deckId, deck } = props;
    const { isLoading, update } = usePostApi();
    const { replace } = useNavigation<NavigationProps>();
    const { toastSuccessCreation, toastError } = useCustomToast();
    const [step, setStep] = useState<EEditCardStep>(EEditCardStep.RECTO);
    const goToNextStep = () => setStep((previousStep) => previousStep + 1);

    const formMethods = useForm<ICardEditForm>({
        defaultValues: {
            type: {
                isReversed: card?.isReversedCard ?? deck?.defaultReviewReverseCard ?? false,
                cardType: card?.type ?? deck?.defaultCardType ?? ECardType.TEXT,
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
        if (deck || deckId) {
            update(getDeckAddCardRoute(deck?.id ?? (deckId as string)), stateToRequest(formData))
                .then(() => {
                    toastSuccessCreation(formData.front.mainText);
                    replace("editCard", { deck });
                })
                .catch((error) => toastError(error.message));
        }
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
