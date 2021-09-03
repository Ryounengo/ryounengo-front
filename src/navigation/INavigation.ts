import { EDeckType } from "@typings/enums";

export type TStackNavigation = {
    decks: undefined;
    deckType: undefined;
    settings: undefined;
    deckDetails: {
        deckId: string;
    };
    deckEdit: {
        deckType: EDeckType;
    };
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
