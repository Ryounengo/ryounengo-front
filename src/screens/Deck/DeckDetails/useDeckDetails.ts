import { useEffect, useState } from "react";
import { getDeckDetailsRoute } from "@routes";
import { responseToState } from "@mappers/getDeckMapper";
import { IDeck } from "@typings/interfaces";
import { useGetApi } from "@hooks/api";

export const useDeckDetails = (deckId: string) => {
    const [deckDetails, setDeckDetails] = useState<IDeck>();
    const {
        data: deckResponse,
        error,
        isValidating,
        refresh,
        isRefreshLoading,
    } = useGetApi<IDeck>(getDeckDetailsRoute(deckId, 0));

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
    };
};
