import { ILoginForm } from "@screens/Authentication/Login/ILogin";
import { IToken } from "@typings/interfaces/IAuthentication";

interface ILoginRequest {
    email: string;
    password: string;
}

export interface ITokenResponse {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: string;
    refreshTokenExpiresAt: string;
}

export const stateToRequest = (loginForm: ILoginForm): ILoginRequest => ({
    email: loginForm.email,
    password: loginForm.password,
});

export const responseToState = (tokenResponse: ITokenResponse): IToken => ({
    accessToken: tokenResponse.accessToken,
    refreshToken: tokenResponse.refreshToken,
    accessTokenExpiresAt: new Date(tokenResponse.accessTokenExpiresAt),
    refreshTokenExpiresAt: new Date(tokenResponse.refreshTokenExpiresAt),
});
