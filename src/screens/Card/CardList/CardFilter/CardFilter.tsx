import { Stack } from "native-base";
import { useFilter } from "./useFilter";
import { ICardFilter } from "./ICardFilter";
import { useStyle } from "@screens/Card/CardList/CardFilter/styles";
import { SearchBar } from "@common/form";

interface IParams {
    setFilter(filter: ICardFilter): void;
    isLoading?: boolean;
}

export const CardFilter = (props: IParams) => {
    const { setFilter } = props;
    const style = useStyle();
    const { formMethods, submit } = useFilter(setFilter);
    const { control, handleSubmit } = formMethods;

    return (
        <Stack style={style.filters}>
            <SearchBar control={control} name="search" submit={handleSubmit(submit)} />
        </Stack>
    );
};
