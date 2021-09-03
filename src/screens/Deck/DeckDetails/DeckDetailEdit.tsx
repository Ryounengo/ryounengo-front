import { DeckEditForm } from "@common";
import { useDeckEdit } from "./useDeckEdit";
import { IDeck } from "@typings/interfaces";

interface IParams {
    deck: IDeck;
    getDeckDetails(): void;
    setIsEditMode(isEditMode: boolean): void;
}

export const DeckDetailsEdit = (props: IParams) => {
    const { deck, getDeckDetails, setIsEditMode } = props;
    const { formMethods, submit, postCreateDeckState } = useDeckEdit(deck, getDeckDetails, setIsEditMode);

    return <DeckEditForm formMethods={formMethods} isLoading={postCreateDeckState.isLoading} submit={submit} />;
};
