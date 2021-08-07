import { IToken, IUser } from "./IAuthentication";
import jwt_decode from "jwt-decode";
import { isBefore } from "date-fns";
import { useFetch } from "../useFetch";
import { REFRESH_TOKEN_ROUTE } from "../../../route";
import { ITokenResponse, responseToState } from "../../../mappers/postLoginMapper";
import { getToken, setToken } from "../../../utils/authUtils";
import { useCallback } from "react";

export const useAuthentication = () => {
    const [postRefreshTokenState, { post }] = useFetch();

    const getUser = (token: IToken): IUser | undefined => {
        try {
            return token ? jwt_decode(token.accessToken) : undefined;
        } catch (err) {
            return undefined;
        }
    };

    const login = async (token: IToken) => {
        await setToken(token);

        return getUser(token);
    };

    const refreshToken = useCallback(
        () =>
            getToken().then((token) => {
                if (token && !isBefore(token.refreshTokenExpiresAt, new Date())) {
                    const payload = { token: token.refreshToken };

                    return post<ITokenResponse>(REFRESH_TOKEN_ROUTE, { body: payload, isSecured: false }).then(
                        async (response) => {
                            if (response) {
                                await setToken(responseToState(response));

                                return getUser(token);
                            }

                            return undefined;
                        }
                    );
                }

                return undefined;
            }),
        [post]
    );

    return {
        getUser,
        login,
        refreshToken,
        postRefreshTokenState,
    };
};
