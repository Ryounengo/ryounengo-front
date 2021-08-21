import { EDeckType } from "../screens/Deck/CreateDeck/ICreateDeck";

export type TStackNavigation = {
    decks: undefined;
    deckType: undefined;
    settings: undefined;
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
