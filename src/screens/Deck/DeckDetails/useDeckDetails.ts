import { useCallback, useEffect, useState } from "react";
import { useFetch } from "@common";
import { getDeckDetailsRoute } from "@routes";
import { responseToState } from "@mappers/getDeckMapper";
import { IDeck, IDeckResponse } from "@typings/interfaces";
import { useIsFocused } from "@react-navigation/native";

export const useDeckDetails = (deckId: string) => {
    const [deckDetails, setDeckDetails] = useState<IDeck>();
    const [getDeckDetailsState, { get }] = useFetch();
    const isScreenFocused = useIsFocused();

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
        if (isScreenFocused) {
            getDeckDetails();
        }
    }, [isScreenFocused, getDeckDetails]);

    return {
        deckDetails,
        getDeckDetails,
        getDeckDetailsState,
    };
};
