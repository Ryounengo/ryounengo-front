import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITokenResponse, responseToState } from "@mappers/postLoginMapper";
import { IToken, IUser } from "@typings/interfaces/IAuthentication";
import { REFRESH_TOKEN_ROUTE } from "@routes";
import jwt_decode from "jwt-decode";

const TOKEN = "token";

export const setToken = async (token: IToken) => {
    const jsonToken = JSON.stringify(token);
    await AsyncStorage.setItem(TOKEN, jsonToken);
};

export const getToken = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(TOKEN);

        return jsonValue != null ? responseToState(JSON.parse(jsonValue)) : null;
    } catch (err) {
        return null;
    }
};

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem(TOKEN);
        // eslint-disable-next-line no-empty
    } catch (err) {}
};

export const refreshToken = () =>
    getToken().then((token) => {
        if (token) {
            const payload = { token: token.refreshToken };

            return fetch(REFRESH_TOKEN_ROUTE, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })
                .then(async (response) => {
                    const data = await response.json();
                    if (response.ok) {
                        const newToken = data as ITokenResponse;
                        await setToken(responseToState(newToken));

                        return token;
                    }

                    removeToken();

                    return undefined;
                })
                .catch(() => {
                    // TODO if (isBefore(new Date(token.refreshToken), new Date())) {
                    removeToken();
                    // }
                });
        }

        return undefined;
    });

export const getUser = (token: IToken): IUser | undefined => {
    try {
        return token ? jwt_decode(token.accessToken) : undefined;
    } catch (err) {
        return undefined;
    }
};

export const logout = () => removeToken();
