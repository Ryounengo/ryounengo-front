import { getDeckRoute } from "@routes";
import { useForm } from "react-hook-form";
import { stateToRequest } from "@mappers/postDeckMapper";
import { IDeck, IDeckEditForm } from "@typings/interfaces";
import { usePutApi } from "@hooks/api";
import { useCustomToast } from "@hooks/useCustomToast";

export const useDeckEdit = (deck: IDeck, getDeckDetails: () => void, setIsEditMode: (isEditMode: boolean) => void) => {
    const { toastSuccessUpdate, toastError } = useCustomToast();
    const { isLoading, update } = usePutApi();
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
        update(getDeckRoute(id), stateToRequest(formData))
            .then(() => {
                toastSuccessUpdate(formData.name);
                getDeckDetails();
                setIsEditMode(false);
            })
            .catch((error) => toastError(error.message));

    return {
        formMethods,
        isLoading,
        submit,
    };
};
