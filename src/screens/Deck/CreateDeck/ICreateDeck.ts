export enum EDeckType {
    BASIC = "BASIC",
    KANJI = "KANJI",
    FREE = "FREE",
}

export interface ICreateDeckForm {
    name: string;
    description: string;
    tags: string;
    isPrivate: boolean;
}
