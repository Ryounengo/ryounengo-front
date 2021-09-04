import { Button, Stack } from "native-base";
import { TextInput } from "@common";
import { useFilter } from "./useFilter";
import { useTranslation } from "react-i18next";
import { ICardFilter } from "./ICardFilter";

interface IParams {
    setFilter(filter: ICardFilter): void;
    isLoading: boolean;
}

export const CardFilter = (props: IParams) => {
    const { setFilter, isLoading } = props;
    const { t } = useTranslation(["common", "validation"]);
    const { formMethods, submit } = useFilter(setFilter);
    const { control, handleSubmit, formState } = formMethods;
    const { errors } = formState;

    return (
        <Stack>
            <TextInput
                control={control}
                error={errors.search}
                label={t("common:search")}
                name="search"
                placeholder={t("common:search")}
            />
            <Button isLoading={isLoading} onPress={handleSubmit(submit)}>
                {t("submit")}
            </Button>
        </Stack>
    );
};
