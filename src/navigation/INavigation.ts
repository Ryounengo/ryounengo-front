export type TStackNavigation = {
    decks: undefined;
    settings: undefined;
    createCard: {
        deckId: string;
    };
    deckDetails: {
        deckId: string;
    };
    createDeck: undefined;
};

export type TStackSettings = {
    user: undefined;
};

export type TBottomTabNavigation = {
    home: undefined;
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
