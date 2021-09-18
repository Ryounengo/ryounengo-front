import { IDeckFilter } from "@typings/interfaces";

export type TDeckNavigation = {
    decks: {
        deckQuery?: IDeckFilter;
    };
    createDeck: undefined;
    createCard: {
        deckId: string;
    };
    deckDetails: {
        deckId: string;
    };
};

export type TCardNavigation = {
    cards: undefined;
};

export type TStackSettings = {
    user: undefined;
};

export type TBottomTabNavigation = {
    home: undefined;
    deck: undefined;
    card: undefined;
    settings: undefined;
};

export type TRootNavigation = {
    main: undefined;
    login: undefined;
    register: undefined;
    lostPassword: undefined;
    updatePassword: {
        email: string;
    };
};
