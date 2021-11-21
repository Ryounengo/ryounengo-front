import useSWR, { SWRConfiguration } from "swr";
import { useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { IError } from "@typings/interfaces";

export const useGetApi = <T>(url: string, options?: SWRConfiguration) => {
    const isFocused = useIsFocused();
    const [isRefreshLoading, setIsRefreshLoading] = useState(false);

    const { data, error, isValidating, mutate } = useSWR<T | undefined, IError>(url, options);

    useEffect(() => {
        if (isFocused) {
            mutate();
        }
    }, [isFocused, mutate]);

    const refresh = useCallback(() => {
        setIsRefreshLoading(true);
        mutate().finally(() => setIsRefreshLoading(false));
    }, [mutate]);

    return {
        data,
        error,
        isValidating,
        isRefreshLoading,
        refresh,
        mutate,
    };
};
