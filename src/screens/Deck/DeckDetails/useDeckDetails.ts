import { getDeckDetailsRoute, getDeckRoute, joinDeckRoute, leaveDeckRoute } from "@routes";
import { responseToState } from "@mappers/getDeckMapper";
import { IDeck, IDeckResponse } from "@typings/interfaces";
import { useDeleteApi, useGetApi, usePostApi, usePutApi } from "@hooks/api";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TDeckNavigation, TRootNavigation } from "@navigation/INavigation";
import { IDeckPayload } from "@typings/interfaces/request/IDeck";

type NavigationProps = CompositeNavigationProp<
    BottomTabNavigationProp<TRootNavigation, "deckDetails">,
    BottomTabNavigationProp<TDeckNavigation>
>;

export const useDeckDetails = (deckId: string) => {
    const { goBack } = useNavigation<NavigationProps>();
    const {
        data: deckDetails,
        error,
        isValidating,
        refresh,
        isRefreshLoading,
    } = useGetApi<IDeckResponse, IDeck>(getDeckDetailsRoute(deckId, 0), { mapper: responseToState });
    const { isLoading: isDeleteLoading, remove } = useDeleteApi();
    const { isLoading: isPutLoading, update: put } = usePutApi();
    const { isLoading: isPostLoading, update: post } = usePostApi();

    const deleteDeck = () => remove(getDeckRoute(deckId)).then(() => goBack());
    const joinDeck = () => post(joinDeckRoute(deckId)).then(() => refresh());
    const leaveDeck = () => remove(leaveDeckRoute(deckId)).then(() => refresh());

    const updateDeck = (updatedDeck: Partial<IDeckPayload>) => {
        if (deckDetails) {
            const { name, description, tags, isPrivate } = { ...deckDetails, ...updatedDeck };
            const payload: IDeckPayload = { name, description, tags, isPrivate };

            return put(getDeckRoute(deckId), payload).then(() => refresh());
        }

        return Promise.resolve();
    };

    return {
        deckDetails,
        error,
        isValidating,
        refresh,
        isRefreshLoading,
        isLoading: isPutLoading || isPostLoading || isDeleteLoading,
        deleteDeck,
        updateDeck,
        joinDeck,
        leaveDeck,
    };
};
