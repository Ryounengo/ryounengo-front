import { useUpdateApi } from "./useUpdateApi";

export const useDeleteApi = <T>() => useUpdateApi<T>("DELETE");
