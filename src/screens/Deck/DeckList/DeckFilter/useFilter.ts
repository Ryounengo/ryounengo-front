import { useForm } from "react-hook-form";
import { IFilterForm } from "./IDeckFilter";
import { defaultPagination } from "@utils/pagination";
import { NO_OPTION, YES_OPTION } from "../../../../constants";
import { IDeckFilter } from "@typings/interfaces";

export const useFilter = (setFilter: (filter: IDeckFilter) => void, filter?: IDeckFilter) => {
    const defaultValues: IFilterForm = {
        isReviewed: filter?.isReviewed ?? true ? YES_OPTION : NO_OPTION,
        name: filter?.name ?? "",
        tags: filter?.tags?.join(",") ?? "",
    };
    const formMethods = useForm<IFilterForm>({ defaultValues });

    const filterToState = (filterForm: IFilterForm): IDeckFilter => ({
        ...defaultPagination,
        name: filterForm.name,
        isReviewed: filterForm.isReviewed === YES_OPTION,
    });

    const submit = (formData: IFilterForm) => {
        setFilter(filterToState(formData));
    };

    return {
        formMethods,
        submit,
    };
};
