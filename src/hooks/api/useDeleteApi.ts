import { useUpdateApi } from "./useUpdateApi";

export const useDeleteApi = <T>() => {
    const { update: remove, isLoading } = useUpdateApi<T>("DELETE");

    return {
        remove,
        isLoading,
    };
};
