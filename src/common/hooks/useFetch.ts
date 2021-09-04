/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getToken } from "@utils/authUtils";

export interface IError {
    message: string;
    status?: number;
}

export interface IFetchState {
    error?: IError;
    isLoading: boolean;
}

const CONTENT_TYPE_HEADER_PARAM = "Content-Type";
const JSON_CONTENT_TYPE = "json";
export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type specialBody = { body?: any };
type useFetchSpecialType = { isSecured?: boolean; forwardError?: boolean };
type specialRequestType = Pick<RequestInit, "headers"> & specialBody & useFetchSpecialType;

export type getSpecialRequestType = Pick<RequestInit, "headers"> & useFetchSpecialType;

export type specialRequestInitCaller = Pick<RequestInit, "method" | "headers"> & specialBody & useFetchSpecialType;

const handleResponse = async (response: Response, genericErrorMessage: string): Promise<any> => {
    let parsedResponse: any;
    const handleBlob = [
        "image",
        "pdf",
        "msword",
        "officedocument",
        "csv",
        "sheet",
        "excel",
        "powerpoint",
        "html",
        "zip",
        "octet-stream",
    ];

    const NO_CONTENT_RESPONSE_STATUS = [201, 204];

    try {
        const contentType = response.headers.get(CONTENT_TYPE_HEADER_PARAM);

        if (response.ok && NO_CONTENT_RESPONSE_STATUS.includes(response.status)) {
            return true;
        }

        if (!contentType) {
            throw new Error();
        } else if (handleBlob.some((type) => contentType.includes(type))) {
            parsedResponse = await response.blob();
        } else if (contentType.includes(JSON_CONTENT_TYPE)) {
            parsedResponse = await response.json();
        } else {
            throw new Error();
        }
    } catch (err) {
        // eslint-disable-next-line no-throw-literal
        throw {
            errorMessage: genericErrorMessage,
            status: response.status,
        };
    }

    if (response.ok) {
        return parsedResponse;
    }

    throw parsedResponse;
};

const httpRequestInit = (options: specialRequestInitCaller, token?: string) => {
    const payload: RequestInit = options;
    payload.headers = new Headers(options.headers);

    if (token) {
        payload.headers.append("Authorization", `Bearer ${token}`);
    }

    if (options.body) {
        if (!payload.headers.get(CONTENT_TYPE_HEADER_PARAM)) {
            payload.headers.append(CONTENT_TYPE_HEADER_PARAM, "application/json");
        }
        if (payload.headers.get(CONTENT_TYPE_HEADER_PARAM)?.includes("multipart/form-data")) {
            // Remove 'Content-Type' header to allow browser to add along with the correct 'boundary'
            payload.headers.delete(CONTENT_TYPE_HEADER_PARAM);
        }
        if (payload.headers.get(CONTENT_TYPE_HEADER_PARAM)?.includes(JSON_CONTENT_TYPE)) {
            payload.body = JSON.stringify(options.body);
        }
    }

    return payload;
};

export const useFetch = () => {
    const didCancel = useRef(false);
    const [state, setState] = useState<IFetchState>({ error: undefined, isLoading: false });
    const { t } = useTranslation();
    const genericErrorMessage = t("genericError");

    useEffect(() => {
        return () => {
            didCancel.current = true;
        };
    }, []);

    /* Memoized fetch callback.
       If passed to a child component prevent from re-rendering every time the parent is rendered */
    const call = useCallback(
        async <T>(
            url: string,
            options: specialRequestInitCaller,
            isSecured = true,
            forwardError = false
        ): Promise<T | undefined> => {
            didCancel.current = false;

            if (url) {
                setState({ error: undefined, isLoading: true });

                try {
                    let token;

                    if (isSecured) {
                        token = await getToken();
                    }

                    const headers = httpRequestInit(options, token?.accessToken);

                    const response = await fetch(url, headers);

                    const parsedResponse = (await handleResponse(response, genericErrorMessage)) as T;

                    if (!didCancel.current) {
                        setState({ error: undefined, isLoading: false });

                        return parsedResponse;
                    }
                } catch (err) {
                    if (!didCancel.current) {
                        const error: IError = {
                            message: err.message ?? genericErrorMessage,
                            status: err.status || 500,
                        };
                        setState({ error, isLoading: false });

                        if (forwardError) {
                            throw error;
                        }
                    }
                }
            }

            return undefined;
        },
        [genericErrorMessage]
    );

    return [
        state,
        {
            get: useCallback(
                <T>(url: string, options?: getSpecialRequestType) =>
                    call<T>(
                        url,
                        { method: "GET", headers: options?.headers },
                        options?.isSecured,
                        options?.forwardError
                    ),
                [call]
            ),
            post: useCallback(
                <T>(url: string, options?: specialRequestType) =>
                    call<T>(
                        url,
                        { method: "POST", headers: options?.headers, body: options?.body },
                        options?.isSecured,
                        options?.forwardError
                    ),
                [call]
            ),
            put: useCallback(
                <T>(url: string, options?: specialRequestType) =>
                    call<T>(
                        url,
                        { method: "PUT", headers: options?.headers, body: options?.body },
                        options?.isSecured,
                        options?.forwardError
                    ),
                [call]
            ),
            patch: useCallback(
                <T>(url: string, options?: specialRequestType) =>
                    call<T>(
                        url,
                        { method: "PATCH", headers: options?.headers, body: options?.body },
                        options?.isSecured,
                        options?.forwardError
                    ),
                [call]
            ),
            deleteCall: useCallback(
                <T>(url: string, options?: specialRequestType) =>
                    call<T>(
                        url,
                        { method: "DELETE", headers: options?.headers, body: options?.body },
                        options?.isSecured,
                        options?.forwardError
                    ),
                [call]
            ),
        },
    ] as const;
};
