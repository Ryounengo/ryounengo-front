import { useUpdateApi } from "./useUpdateApi";

export const usePostApi = <T>() => useUpdateApi<T>("POST");
