export enum ECardReviewName {
    BLACKOUT = "BLACKOUT",
    FAILED = "FAILED",
    CLOSE = "CLOSE",
    HARD = "HARD",
    MEDIUM = "MEDIUM",
    EASY = "EASY",
}

export interface IReviewPayload {
    reviewLevel: ECardReviewName;
}
