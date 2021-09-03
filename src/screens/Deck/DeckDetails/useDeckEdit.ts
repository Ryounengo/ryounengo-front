import { IError, useFetch } from "../../../common";
import { getDeckRoute } from "../../../routes";
import { IDeck, IDeckEditForm } from "../../../types/interfaces";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { stateToRequest } from "../../../mappers/postDeckMapper";
import { useToast } from "native-base";

export const useDeckEdit = (deck: IDeck, getDeckDetails: () => void, setIsEditMode: (isEditMode: boolean) => void) => {
    const toast = useToast();
    const { t } = useTranslation("common");
    const [postCreateDeckState, { put }] = useFetch();
    const { isPrivate, modelType, id, tags, description, name } = deck;
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
        put(getDeckRoute(id), { body: stateToRequest(formData, modelType), forwardError: true })
            .then(() => {
                toast.show({ status: "success", description: t("successUpdate", { item: formData.name }) });
                getDeckDetails();
                setIsEditMode(false);
            })
            .catch((error: IError) =>
                toast.show({
                    accessibilityLabel: t("error"),
                    title: t("error"),
                    status: "error",
                    description: error.message,
                })
            );

    return {
        formMethods,
        postCreateDeckState,
        submit,
    };
};
