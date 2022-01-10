export interface IToken {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
    refreshTokenExpiresAt: Date;
}

export interface IUser {
    email: string;
    username: string;
}
