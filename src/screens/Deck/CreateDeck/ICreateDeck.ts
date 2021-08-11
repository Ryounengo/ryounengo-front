export enum EDeckType {
    BASIC = "BASIC",
    HIRAGANA = "HIRAGANA",
    FREE = "FREE",
}

export interface ICreateDeckForm {
    name: string;
    description: string;
    tags: string;
    isPrivate: boolean;
}
