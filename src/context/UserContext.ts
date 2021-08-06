import { createContext } from "react";
import { IUser } from "../common";

interface IUserContext {
    user?: IUser;
    setUser: (user?: IUser) => void;
}

export const UserContext = createContext<IUserContext>({
    user: undefined,
    // eslint-disable-next-line no-console
    setUser: (user?: IUser) => console.log(user ?? "No context available"),
});
