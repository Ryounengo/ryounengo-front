export interface ILostPasswordForm {
    email: string;
}

export interface IUpdatePasswordForm {
    code: string;
    password: string;
    confirmation: string;
}
