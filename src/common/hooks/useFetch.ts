/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";
import { getToken } from "../../utils/authUtils";
import { useTranslation } from "react-i18next";

export interface IError {
    errorMessage: string;
    status?: number;
}

export interface IFetchState {
    error?: IError;
    isLoading: boolean;
}

const CONTENT_TYPE_HEADER_PARAM = "Content-Type";
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

        if (response.ok && response.status in NO_CONTENT_RESPONSE_STATUS) {
            return true;
        }

        if (contentType === null) {
            throw new Error();
        } else if (handleBlob.some((type) => contentType.includes(type))) {
            parsedResponse = response.blob();
        } else if (contentType.includes("json")) {
            parsedResponse = await response.json();
        } else {
            throw new Error();
        }
    } catch {
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

const httpRequestInit = (options: specialRequestInitCaller, isSecured: boolean): RequestInit => {
    const payload: RequestInit = options;
    payload.headers = new Headers(options.headers);

    if (isSecured) {
        const token = getToken();
        payload.headers.append("Authorization", `Bearer ${token}`);
    }
    if (options.body) {
        if (!payload.headers.get(CONTENT_TYPE_HEADER_PARAM)) {
            payload.headers.append(CONTENT_TYPE_HEADER_PARAM, "application/json");
        }
        if (payload.headers.get(CONTENT_TYPE_HEADER_PARAM)?.includes("multipart/form-data")) {
            // Remove 'Content-Type' header to allow browser to add along with the correct 'boundary'
            payload.headers.delete("Content-Type");
        }
        if (payload.headers.get(CONTENT_TYPE_HEADER_PARAM)?.includes("json")) {
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
                    const headers = await httpRequestInit(options, isSecured);
                    const response = await fetch(url, headers);
                    const parsedResponse = (await handleResponse(response, genericErrorMessage)) as T;

                    if (!didCancel.current) {
                        setState({ error: undefined, isLoading: false });

                        return parsedResponse;
                    }
                } catch (err) {
                    if (!didCancel.current) {
                        const error: IError = {
                            errorMessage: err.errorMessage || err.detail || err.title || genericErrorMessage,
                            status: err.status,
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
