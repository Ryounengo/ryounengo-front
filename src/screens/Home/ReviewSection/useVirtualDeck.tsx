import { useFetch } from "@common";
import { useCallback, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { IVirtualDeck, IVirtualDeckResponse } from "@typings/interfaces";
import { VIRTUAL_DECK_ROUTE } from "@routes";
import { responseToState } from "@mappers/getVirtualDeckMapper";

const mockVirtualDeck: IVirtualDeck = {
    tags: ["test", "test2", "test3"],
    cards: ["1", "2", "3", "4", "5", "6"],
};

export const useVirtualDeck = () => {
    const [virtualDeck, setVirtualDeck] = useState<IVirtualDeck>(mockVirtualDeck);
    const [getVirtualDeckState, { get }] = useFetch();
    const isFocused = useIsFocused();

    const getVirtualDeck = useCallback(
        () =>
            get<IVirtualDeckResponse>(VIRTUAL_DECK_ROUTE).then((response) => {
                if (response) {
                    setVirtualDeck(responseToState(response));
                }
            }),
        [get]
    );

    useEffect(() => {
        if (isFocused) {
            getVirtualDeck();
        }
    }, [getVirtualDeck, isFocused]);

    return {
        virtualDeck,
        getVirtualDeckState,
    };
};
