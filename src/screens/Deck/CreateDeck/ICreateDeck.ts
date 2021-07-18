export enum EDeckType {
    BASIC = "BASIC",
    HIRAGANA = "HIRAGANA",
    FREE = "FREE",
}

export type TCreateDeckStackParams = {
    deckType: undefined;
    deckEdit: { deckType: EDeckType };
};

export interface ICreateDeckForm {
    deckType: EDeckType;
    name: string;
    description: string;
    tags: string[];
}
