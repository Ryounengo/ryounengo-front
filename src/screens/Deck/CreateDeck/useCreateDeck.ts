import { useForm } from "react-hook-form";
import { EDeckType, ICreateDeckForm } from "./ICreateDeck";
import { useToast } from "native-base";
import { useTranslation } from "react-i18next";
import { getDeckRoute } from "../../../routes";
import { stateToRequest } from "../../../mappers/postDeckMapper";
import { IError, useFetch } from "../../../common";

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
        post(getDeckRoute(), { body: stateToRequest(formData, deckType), forwardError: true })
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
