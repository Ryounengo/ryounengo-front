import { FormControl, Input } from "native-base";
import { Controller, FieldError, UseControllerProps } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface IParams<T> {
    name: string;
    error: FieldError | undefined;
    placeholder?: string;
    control: UseControllerProps<T>["control"];
    label: string;
    rules?: UseControllerProps<T>["rules"];
    isRequired?: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const TextInput = <T extends {}>(props: IParams<T>) => {
    const { name, error, placeholder, control, label, rules, isRequired } = props;
    const { t } = useTranslation("validation");

    return (
        <FormControl isInvalid={Boolean(error)} isRequired={isRequired}>
            <FormControl.Label>{label}</FormControl.Label>
            <Controller
                control={control}
                name={name}
                render={(renderProps) => <Input {...renderProps.field} placeholder={placeholder} variant="outline" />}
                rules={{
                    ...rules,
                    required: { value: Boolean(isRequired), message: t<string>("validation:required") },
                }}
            />
            <FormControl.ErrorMessage>{error?.message}</FormControl.ErrorMessage>
        </FormControl>
    );
};
