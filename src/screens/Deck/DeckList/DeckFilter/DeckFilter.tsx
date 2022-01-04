import { Stack } from "native-base";
import { useFilter } from "./useFilter";
import { useStyle } from "@screens/Deck/DeckList/DeckFilter/styles";
import { IDeckFilter } from "@typings/interfaces";
import { SearchBar } from "@common/form";

interface IParams {
    setFilter(filter: IDeckFilter): void;
    defaultValues?: IDeckFilter;
}

export const DeckFilter = (props: IParams) => {
    const { setFilter, defaultValues } = props;
    const { formMethods, submit } = useFilter(setFilter, defaultValues);
    const style = useStyle();
    const { control, handleSubmit } = formMethods;

    return (
        <Stack space={4} style={style.filters}>
            <SearchBar control={control} name="name" submit={handleSubmit(submit)} />
        </Stack>
    );
};
