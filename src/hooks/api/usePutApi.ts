import { useUpdateApi } from "./useUpdateApi";

export const usePutApi = <T>() => useUpdateApi<T>("PUT");
