import { IUpdatePasswordForm } from "@screens/Authentication/LostPassword/IILostPassword";

interface IUpdatePasswordRequest {
    code: number;
    password: string;
}

export const stateToRequest = (lostPasswordForm: IUpdatePasswordForm): IUpdatePasswordRequest => ({
    code: parseInt(lostPasswordForm.code),
    password: lostPasswordForm.password,
});
