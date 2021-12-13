import { useCallback, useState } from "react";
import { fetcher } from "@utils/fetchUtils";

export const useUpdateApi = <T>(method: "POST" | "DELETE" | "PUT" | "PATCH") => {
    const [isLoading, setIsLoading] = useState(false);

    const update = useCallback(
        (url: string, givenBody?: unknown) => {
            setIsLoading(true);

            return fetcher<T>(url, { body: givenBody, method }).finally(() => setIsLoading(false));
        },
        [method]
    );

    return {
        update,
        isLoading,
    };
};
