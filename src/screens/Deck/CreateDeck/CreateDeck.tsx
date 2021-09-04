import { useCreateDeck } from "./useCreateDeck";
import { DeckEditForm } from "@common";

export const CreateDeck = () => {
    const { formMethods, submit, postCreateDeckState } = useCreateDeck();

    return <DeckEditForm formMethods={formMethods} isLoading={postCreateDeckState.isLoading} submit={submit} />;
};
