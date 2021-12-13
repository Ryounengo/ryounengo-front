import { useEffect, useState } from "react";
import { getDeckDetailsRoute, getDeckRoute } from "@routes";
import { responseToState } from "@mappers/getDeckMapper";
import { IDeck } from "@typings/interfaces";
import { useDeleteApi, useGetApi, usePutApi } from "@hooks/api";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TDeckNavigation, TRootNavigation } from "@navigation/INavigation";
import { IDeckPayload } from "@typings/interfaces/request/IDeck";

type NavigationProps = CompositeNavigationProp<
    BottomTabNavigationProp<TRootNavigation, "deckDetails">,
    BottomTabNavigationProp<TDeckNavigation>
>;

export const useDeckDetails = (deckId: string) => {
    const [deckDetails, setDeckDetails] = useState<IDeck>();
    const { goBack } = useNavigation<NavigationProps>();
    const {
        data: deckResponse,
        error,
        isValidating,
        refresh,
        isRefreshLoading,
    } = useGetApi<IDeck>(getDeckDetailsRoute(deckId, 0));
    const { isLoading: isDeleteLoading, remove } = useDeleteApi();
    const { isLoading: isUpdateLoading, update } = usePutApi();

    const deleteDeck = () => remove(getDeckRoute(deckId)).then(() => goBack());
    const updateDeck = (updatedDeck: Partial<IDeckPayload>) => {
        if (deckDetails) {
            const { name, description, tags, isPrivate } = { ...deckDetails, ...updatedDeck };
            const payload: IDeckPayload = { name, description, tags, isPrivate };
            update(getDeckRoute(deckId), payload).then(() => refresh());
        }
    };

    useEffect(() => {
        if (deckResponse) {
            setDeckDetails(responseToState(deckResponse));
        }
    }, [deckResponse]);

    return {
        deckDetails,
        error,
        isValidating,
        refresh,
        isRefreshLoading,
        isLoading: isUpdateLoading || isDeleteLoading,
        deleteDeck,
        updateDeck,
    };
};
