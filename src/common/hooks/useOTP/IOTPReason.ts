export interface IOtpPayload {
    email: string;
    reason: EOtpReason;
}

export enum EOtpReason {
    CHANGE_PASSWORD = "CHANGE_PASSWORD",
}
