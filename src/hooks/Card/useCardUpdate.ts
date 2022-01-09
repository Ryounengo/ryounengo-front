import { ICard, IError } from "@typings/interfaces";
import { getCardDetailsRoute } from "@routes";
import { useDeleteApi, usePutApi } from "@hooks/api";
import { useCustomToast } from "@hooks/useCustomToast";
import { ICardPayload } from "@typings/interfaces/request/ICard";

export const useCardUpdate = (card: ICard) => {
    const { isLoading: isRemoveLoading, remove } = useDeleteApi();
    const { update, isLoading: isUpdateLoading } = usePutApi();
    const { toastSuccessUpdate, toastError } = useCustomToast();

    const deleteCard = () => remove(getCardDetailsRoute(card.id)).catch((error: IError) => toastError(error.message));

    const updateCard = (data: ICardPayload) =>
        update(getCardDetailsRoute(card.id), data)
            .then(() => toastSuccessUpdate(card.front[0]))
            .catch((error: IError) => toastError(error.message));

    return {
        deleteCard,
        updateCard,
        isRemoveLoading,
        isUpdateLoading,
    };
};
