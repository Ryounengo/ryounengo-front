import { useForm } from "react-hook-form";
import { EDeckType, ICreateDeckForm } from "./ICreateDeck";
import { useFetch } from "../../../common/hooks/useFetch";
import { useToast } from "native-base";
import { useTranslation } from "react-i18next";
import { DECK_ROUTE } from "../../../route/deck";

export const useCreateDeck = (deckType: EDeckType) => {
    const formMethods = useForm<ICreateDeckForm>({
        defaultValues: {
            name: "",
            description: "",
            tags: [],
        },
    });
    const [postCreateDeckState, { post }] = useFetch();
    const toast = useToast();
    const { t } = useTranslation();

    const submit = (formData: ICreateDeckForm) => {
        post(DECK_ROUTE, { body: { ...formData, deckType }, forwardError: true })
            .then(() => toast.show({ status: "success", description: t("GG") }))
            .catch(() => toast.show({ status: "error", description: t("ERROR") }));
    };

    return {
        formMethods,
        submit,
        postCreateDeckState,
    };
};
