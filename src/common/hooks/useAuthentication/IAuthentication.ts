export interface IToken {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
    refreshTokenExpiresAt: Date;
}

interface IProfile {
    username: string;
}

export interface IUser {
    email: string;
    profile: IProfile;
}
