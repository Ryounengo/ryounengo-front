import { EDeckType } from "../screens/Deck/CreateDeck/ICreateDeck";

export type TStackNavigation = {
    decks: undefined;
    deckType: undefined;
    deckEdit: {
        deckType: EDeckType;
    };
};

export type TBottomTabNavigation = {
    navigation: undefined;
};

export type TRootNavigation = {
    main: undefined;
    login: undefined;
};
