import { FormControl, Select } from "native-base";
import { Controller, FieldError, FieldValues, UseControllerProps } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ComponentProps, ReactNode } from "react";

interface IParams<T> extends ComponentProps<typeof Select> {
    name: string;
    error: FieldError | undefined;
    control: UseControllerProps<T>["control"];
    label: string;
    isRequired?: boolean;
    children: ReactNode[];
}

export const SelectInput = <T extends FieldValues>(props: IParams<T>) => {
    const { name, error, control, label, isRequired, children } = props;
    const { t } = useTranslation("validation");

    return (
        <FormControl isInvalid={Boolean(error)} isRequired={isRequired}>
            <FormControl.Label>{label}</FormControl.Label>
            <Controller
                control={control}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                name={name}
                render={(renderProps) => (
                    <Select
                        placeholder={label}
                        selectedValue={renderProps.field.value}
                        onValueChange={(value) => renderProps.field.onChange(value)}
                    >
                        {children}
                    </Select>
                )}
                rules={{
                    required: { value: Boolean(isRequired), message: t("required") },
                }}
            />
            <FormControl.ErrorMessage>{error?.message}</FormControl.ErrorMessage>
        </FormControl>
    );
};
