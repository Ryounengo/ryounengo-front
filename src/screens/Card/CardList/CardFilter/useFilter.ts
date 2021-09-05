import { useForm } from "react-hook-form";
import { defaultPagination } from "@utils/pagination";
import { ICardFilter } from "@screens/Card/CardList/CardFilter/ICardFilter";

const defaultValues: ICardFilter = {
    search: "",
};

export const useFilter = (setFilter: (filter: ICardFilter) => void) => {
    const formMethods = useForm<ICardFilter>({ defaultValues });
    const { reset } = formMethods;
    const clearForm = () => reset(defaultValues);

    const filterToState = (filterForm: ICardFilter): ICardFilter => ({
        ...defaultPagination,
        search: filterForm.search,
    });

    const submit = (formData: ICardFilter) => {
        setFilter(filterToState(formData));
    };

    return {
        formMethods,
        clearForm,
        submit,
    };
};
