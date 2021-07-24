import { FormControl, Input } from "native-base";
import { Controller, FieldError, FieldValues, UseControllerProps } from "react-hook-form";
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

export const TextInput = <T extends FieldValues>(props: IParams<T>) => {
    const { name, error, placeholder, control, label, rules, isRequired } = props;
    const { t } = useTranslation("validation");

    return (
        <FormControl isInvalid={Boolean(error)} isRequired={isRequired}>
            <FormControl.Label>{label}</FormControl.Label>
            <Controller
                control={control}
                name={name}
                render={(renderProps) => (
                    <Input
                        isRequired={isRequired}
                        placeholder={placeholder}
                        value={renderProps.field.value}
                        variant="outline"
                        onBlur={renderProps.field.onBlur}
                        onChangeText={(val) => renderProps.field.onChange(val)}
                    />
                )}
                rules={{
                    ...rules,
                    required: { value: Boolean(isRequired), message: t("required") },
                }}
            />
            <FormControl.ErrorMessage>{error?.message}</FormControl.ErrorMessage>
        </FormControl>
    );
};
