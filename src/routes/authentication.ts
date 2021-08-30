import { AUTHENTICATED_API_ENDPOINT } from "./endpoint";

const AUTH_API_ENDPOINT = `${AUTHENTICATED_API_ENDPOINT}/auth`;

export const LOGIN_ROUTE = `${AUTH_API_ENDPOINT}/login`;

export const REFRESH_TOKEN_ROUTE = `${AUTH_API_ENDPOINT}/token/refresh`;
