import { IDeckFilter, IDeckSummary } from "@typings/interfaces";
import { NavigatorScreenParams } from "@react-navigation/native";

export type TDeckNavigation = {
    decks: {
        deckQuery?: IDeckFilter;
    };
};

export type TCardNavigation = {
    cards: undefined;
};

export type THomeNavigation = {
    home: undefined;
};

export type TStackSettings = {
    user: undefined;
};

export type TBottomTabNavigation = {
    homeStack: NavigatorScreenParams<THomeNavigation>;
    deck: NavigatorScreenParams<TDeckNavigation>;
    card: NavigatorScreenParams<TCardNavigation>;
};

export type TRootNavigation = {
    editDeck: {
        deck?: IDeckSummary;
    };
    createCard: {
        deckId: string;
    };
    deckDetails: {
        deckId: string;
    };
    main: undefined;
    reviewCards: {
        deckId?: string;
    };
    login: undefined;
    register: undefined;
    lostPassword: undefined;
    updatePassword: {
        email: string;
    };
};
