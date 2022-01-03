/* eslint-disable @typescript-eslint/no-explicit-any */
import { i18n } from "../i18n/i18n";
import { getToken, refreshToken } from "@utils/authUtils";

export const objectToQuery = (object: Record<string, unknown>) =>
    Object.entries(object)
        .filter(([, value]) => value !== undefined && value !== null && value !== "")
        .map(([key, value]) => `${key}=${encodeURIComponent(`${value}`)}`)
        .join("&");

export interface IRequestInit extends RequestInit {
    isSecured?: boolean;
    body: any;
}

const CONTENT_TYPE_HEADER_PARAM = "Content-Type";
const JSON_CONTENT_TYPE = "json";

const httpRequestInit = (options?: IRequestInit, token?: string) => {
    const payload: RequestInit = options ?? {};
    payload.headers = new Headers(options?.headers);

    if (token) {
        payload.headers.append("Authorization", `Bearer ${token}`);
    }

    if (options?.body) {
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

export const fetcher = async <T>(input: RequestInfo, init?: IRequestInit): Promise<T | undefined> => {
    let parsedResponse;

    const handleBlob = ["image", "pdf", "csv", "sheet", "html", "octet-stream"];
    const NO_CONTENT_RESPONSE_STATUS = [201, 204];

    let token;

    if (init?.isSecured || init?.isSecured === undefined) {
        await refreshToken();
        token = await getToken();
    }

    const initOptions = httpRequestInit(init, token?.accessToken);

    const response = await fetch(input, initOptions);

    try {
        const contentType = response.headers.get(CONTENT_TYPE_HEADER_PARAM);

        if (response.ok && NO_CONTENT_RESPONSE_STATUS.includes(response.status)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
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
            errorMessage: i18n.t("genericError"),
            status: response.status,
        };
    }

    if (response.ok) {
        return parsedResponse;
    }

    throw parsedResponse;
};
