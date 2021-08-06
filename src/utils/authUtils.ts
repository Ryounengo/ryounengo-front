import { IToken } from "../common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { responseToState } from "../mappers/postLoginMapper";

const TOKEN = "token";

export const setToken = async (token: IToken) => {
    try {
        const jsonToken = JSON.stringify(token);
        await AsyncStorage.setItem(TOKEN, jsonToken);
        // eslint-disable-next-line no-empty
    } catch (err) {}
};

export const getToken = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(TOKEN);

        return jsonValue != null ? responseToState(JSON.parse(jsonValue)) : null;
    } catch (err) {
        return null;
    }
};
