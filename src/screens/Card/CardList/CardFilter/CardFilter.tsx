import { IconButton, SearchIcon, Stack } from "native-base";
import { TextInput } from "@common";
import { useFilter } from "./useFilter";
import { useTranslation } from "react-i18next";
import { ICardFilter } from "./ICardFilter";
import { useStyle } from "@screens/Card/CardList/CardFilter/styles";

interface IParams {
    setFilter(filter: ICardFilter): void;
    isLoading: boolean;
}

export const CardFilter = (props: IParams) => {
    const { setFilter, isLoading } = props;
    const { t } = useTranslation(["common", "validation"]);
    const style = useStyle();
    const { formMethods, submit } = useFilter(setFilter);
    const { control, handleSubmit, formState, setValue, clearErrors } = formMethods;
    const { errors } = formState;

    return (
        <Stack style={style.filters}>
            <TextInput
                clearError={clearErrors}
                control={control}
                error={errors.search}
                name="search"
                placeholder={t("card:searchCard")}
                prependedComponent={
                    <IconButton disabled={isLoading} icon={<SearchIcon />} onPress={handleSubmit(submit)} />
                }
                setValue={setValue}
            />
        </Stack>
    );
};
