import { TextInput } from "@common/form/TextInput";
import { SearchIcon } from "native-base";
import { useTranslation } from "react-i18next";
import {
    FieldError,
    FieldValues,
    Path,
    UseControllerProps,
    UseFormClearErrors,
    UseFormSetValue,
} from "react-hook-form";

interface IParams<T> {
    name: Path<T>;
    control: UseControllerProps<T>["control"];
    error: FieldError | undefined;
    setValue: UseFormSetValue<T>;
    rules?: UseControllerProps<T>["rules"];
    clearErrors?: UseFormClearErrors<T>;
    submit(): void;
}

export const SearchBar = <T extends FieldValues>(props: IParams<T>) => {
    const { name, control, error, rules, clearErrors, setValue, submit } = props;
    const { t } = useTranslation("common");

    return (
        <TextInput
            clearError={clearErrors}
            control={control}
            error={error}
            name={name}
            placeholder={t("deck:search")}
            prependedComponent={<SearchIcon />}
            rules={rules}
            setValue={setValue}
            onSubmitEditing={submit}
        />
    );
};
