import { StackScreenProps } from "@react-navigation/stack";
import { useCreateDeck } from "./useCreateDeck";
import { TStackNavigation } from "../../../navigation/INavigation";
import { DeckEditForm } from "../../../common/Deck/DeckEditForm";

type TParams = StackScreenProps<TStackNavigation, "deckEdit">;

export const DeckEdit = (props: TParams) => {
    const { route } = props;
    const { formMethods, submit, postCreateDeckState } = useCreateDeck(route.params.deckType);

    return <DeckEditForm formMethods={formMethods} isLoading={postCreateDeckState.isLoading} submit={submit} />;
};
