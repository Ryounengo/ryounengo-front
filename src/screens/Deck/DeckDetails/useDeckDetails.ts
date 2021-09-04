import { useCallback, useEffect, useState } from "react";
import { useFetch } from "@common";
import { getDeckDetailsRoute } from "@routes/deck";
import { responseToState } from "@mappers/getDeckMapper";
import { IDeck, IDeckResponse } from "@typings/interfaces";

export const useDeckDetails = (deckId: string) => {
    const [deckDetails, setDeckDetails] = useState<IDeck>();
    const [getDeckDetailsState, { get }] = useFetch();

    const getDeckDetails = useCallback(
        () =>
            get<IDeckResponse>(getDeckDetailsRoute(deckId, 0)).then((response) => {
                if (response) {
                    setDeckDetails(responseToState(response));
                }
            }),
        [deckId, get]
    );

    useEffect(() => {
        getDeckDetails();
    }, [getDeckDetails]);

    return {
        deckDetails,
        getDeckDetails,
        getDeckDetailsState,
    };
};
