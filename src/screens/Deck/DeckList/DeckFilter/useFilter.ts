import { IDeckFilter } from "../../IDeck";
import { useForm } from "react-hook-form";
import { IFilterForm } from "./IDeckFilter";
import { defaultPagination } from "../../../../utils/pagination";
import { ALL_OPTIONS, YES_OPTION } from "../../../../constants";
import { EDeckType } from "../../CreateDeck/ICreateDeck";

const defaultValues: IFilterForm = {
    isPrivate: ALL_OPTIONS,
    modelType: ALL_OPTIONS,
    name: "",
    tags: "",
};

export const useFilter = (setFilter: (filter: IDeckFilter) => void) => {
    const formMethods = useForm<IFilterForm>({ defaultValues });
    const { reset } = formMethods;
    const clearForm = () => reset(defaultValues);

    const filterToState = (filterForm: IFilterForm): IDeckFilter => ({
        ...defaultPagination,
        tags: filterForm.tags.split(","),
        name: filterForm.name,
        isPrivate: filterForm.isPrivate === ALL_OPTIONS ? undefined : filterForm.isPrivate === YES_OPTION,
        modelType: filterForm.modelType === ALL_OPTIONS ? undefined : (filterForm.modelType as EDeckType),
    });

    const submit = (formData: IFilterForm) => {
        setFilter(filterToState(formData));
    };

    return {
        formMethods,
        clearForm,
        submit,
    };
};
