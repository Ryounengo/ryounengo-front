export enum EDeckType {
    BASIC = "BASIC",
    KANJI = "KANJI",
    FREE = "FREE",
}

export type TCreateDeckStackParams = {
    deckType: undefined;
    deckEdit: { deckType: EDeckType };
};

export interface ICreateDeckForm {
    name: string;
    description: string;
    tags: string;
    isPrivate: boolean;
}
