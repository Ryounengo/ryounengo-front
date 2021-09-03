import { useForm } from "react-hook-form";
import { useToast } from "native-base";
import { useTranslation } from "react-i18next";
import { getDecksRoute } from "../../../routes";
import { stateToRequest } from "../../../mappers/postDeckMapper";
import { IError, useFetch } from "../../../common";
import { EDeckType } from "../../../types/enums";
import { IDeckEditForm } from "../../../types/interfaces";

export const useCreateDeck = (deckType: EDeckType) => {
    const formMethods = useForm<IDeckEditForm>({
        defaultValues: {
            name: "",
            description: "",
            tags: "",
            isPrivate: false,
        },
    });
    const [postCreateDeckState, { post }] = useFetch();
    const toast = useToast();
    const { t } = useTranslation(["common", "deck"]);
    formMethods.register("tags");

    const submit = (formData: IDeckEditForm) =>
        post(getDecksRoute(), { body: stateToRequest(formData, deckType), forwardError: true })
            .then(() =>
                toast.show({ status: "success", description: t("common:successCreation", { item: formData.name }) })
            )
            .catch((error: IError) =>
                toast.show({
                    accessibilityLabel: t("common:error"),
                    title: t("common:error"),
                    status: "error",
                    description: error.message,
                })
            );

    return {
        formMethods,
        submit,
        postCreateDeckState,
    };
};
