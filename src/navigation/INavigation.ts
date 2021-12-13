import { IDeckFilter } from "@typings/interfaces";
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
    home: NavigatorScreenParams<THomeNavigation>;
    deck: NavigatorScreenParams<TDeckNavigation>;
    card: NavigatorScreenParams<TCardNavigation>;
    settings: undefined;
};

export type TRootNavigation = {
    createDeck: undefined;
    createCard: {
        deckId: string;
    };
    deckDetails: {
        deckId: string;
    };
    main: undefined;
    reviewCards: undefined;
    login: undefined;
    register: undefined;
    lostPassword: undefined;
    updatePassword: {
        email: string;
    };
};
