import { useForm } from "react-hook-form";
import { IFilterForm } from "./IDeckFilter";
import { defaultPagination } from "@utils/pagination";
import { ALL_OPTIONS, NO_OPTION, YES_OPTION } from "../../../../constants";
import { IDeckFilter } from "@typings/interfaces";

export const useFilter = (setFilter: (filter: IDeckFilter) => void, filter?: IDeckFilter) => {
    let isPrivateDefaultValue = ALL_OPTIONS;

    if (filter?.isPrivate !== undefined) {
        isPrivateDefaultValue = filter.isPrivate ? YES_OPTION : NO_OPTION;
    }

    const defaultValues: IFilterForm = {
        isPrivate: isPrivateDefaultValue,
        name: filter?.name ?? "",
        tags: filter?.tags?.join(",") ?? "",
    };
    const formMethods = useForm<IFilterForm>({ defaultValues });

    const filterToState = (filterForm: IFilterForm): IDeckFilter => ({
        ...defaultPagination,
        tags: filterForm.tags.split(","),
        name: filterForm.name,
        isPrivate: filterForm.isPrivate === ALL_OPTIONS ? undefined : filterForm.isPrivate === YES_OPTION,
    });

    const submit = (formData: IFilterForm) => {
        setFilter(filterToState(formData));
    };

    return {
        formMethods,
        submit,
    };
};
