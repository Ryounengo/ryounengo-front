import useSWR, { SWRConfiguration } from "swr";
import { useIsFocused } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { IError } from "@typings/interfaces";

interface IOptions<MappedResponse, Response> extends SWRConfiguration {
    mapper: (response: Response) => MappedResponse;
}

export const useGetApi = <Response, MappedResponse = Response>(
    url: string,
    options?: IOptions<MappedResponse, Response>
) => {
    const isFocused = useIsFocused();
    const [isRefreshLoading, setIsRefreshLoading] = useState(false);

    const { data, error, isValidating, mutate } = useSWR<Response | undefined, IError>(url, options);

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
        data: data ? ((options?.mapper ? options.mapper(data) : data) as MappedResponse) : undefined,
        error,
        isValidating,
        isRefreshLoading,
        refresh,
        mutate,
    };
};
