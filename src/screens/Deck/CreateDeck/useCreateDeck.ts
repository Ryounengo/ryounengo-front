import { useForm } from "react-hook-form";
import { EDeckType, ICreateDeckForm } from "./ICreateDeck";
import { IError, useFetch } from "../../../common";
import { useToast } from "native-base";
import { useTranslation } from "react-i18next";
import { DECK_ROUTE } from "../../../route";
import { stateToResponse } from "../../../mappers/postDeckMapper";

export const useCreateDeck = (deckType: EDeckType) => {
    const formMethods = useForm<ICreateDeckForm>({
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

    const submit = (formData: ICreateDeckForm) =>
        post(DECK_ROUTE, { body: stateToResponse(formData, deckType), forwardError: true })
            .then(() => toast.show({ status: "success", description: t("common:success", { item: t("deck:deck") }) }))
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
