import { AUTHENTICATED_API_ENDPOINT } from "./endpoint";

const AUTH_API_ENDPOINT = `${AUTHENTICATED_API_ENDPOINT}/auth`;

export const LOGIN_ROUTE = `${AUTH_API_ENDPOINT}/login`;

export const REGISTER_ROUTE = `${AUTH_API_ENDPOINT}/register`;

export const REFRESH_TOKEN_ROUTE = `${AUTH_API_ENDPOINT}/token/refresh`;

export const OTP_ROUTE = `${AUTH_API_ENDPOINT}/otp`;

export const UPDATE_PASSWORD_ROUTE = `${AUTH_API_ENDPOINT}/change_password`;
