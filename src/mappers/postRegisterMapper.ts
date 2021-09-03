import { IRegisterForm } from "@screens/Authentication/Register/IRegister";

interface IRegisterRequest {
    email: string;
    username: string;
    password: string;
}

export const stateToRequest = (loginForm: IRegisterForm): IRegisterRequest => ({
    email: loginForm.email,
    username: loginForm.username,
    password: loginForm.password,
});
