import { IError, useCustomToast, useFetch } from "@common";
import { getDeckRoute } from "@routes";
import { useForm } from "react-hook-form";
import { stateToRequest } from "@mappers/postDeckMapper";
import { IDeck, IDeckEditForm } from "@typings/interfaces";

export const useDeckEdit = (deck: IDeck, getDeckDetails: () => void, setIsEditMode: (isEditMode: boolean) => void) => {
    const { toastSuccessUpdate, toastError } = useCustomToast();
    const [postCreateDeckState, { put }] = useFetch();
    const { isPrivate, id, tags, description, name } = deck;
    const formMethods = useForm<IDeckEditForm>({
        defaultValues: {
            name,
            description,
            tags: tags.join(","),
            isPrivate,
        },
    });
    formMethods.register("tags");

    const submit = (formData: IDeckEditForm) =>
        put(getDeckRoute(id), { body: stateToRequest(formData), forwardError: true })
            .then(() => {
                toastSuccessUpdate(formData.name);
                getDeckDetails();
                setIsEditMode(false);
            })
            .catch((error: IError) => toastError(error.message));

    return {
        formMethods,
        postCreateDeckState,
        submit,
    };
};
