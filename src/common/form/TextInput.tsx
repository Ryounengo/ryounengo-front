import { FormControl, Input, useTheme } from "native-base";
import { ComponentProps, ReactElement } from "react";
import {
    Controller,
    FieldError,
    FieldValues,
    Path,
    UseControllerProps,
    UseFormClearErrors,
    UseFormSetValue,
} from "react-hook-form";
import { useTranslation } from "react-i18next";

interface IParams<T> extends ComponentProps<typeof Input> {
    name: Path<T>;
    error: FieldError | undefined;
    control: UseControllerProps<T>["control"];
    label?: string;
    setValue?: UseFormSetValue<T>;
    clearError?: UseFormClearErrors<T>;
    placeholder?: string;
    prependedComponent?: ReactElement;
    rules?: UseControllerProps<T>["rules"];
    isRequired?: boolean;
}

export const TextInput = <T extends FieldValues>(props: IParams<T>) => {
    const { name, error, placeholder, control, label, rules, isRequired, prependedComponent, ...inputProps } = props;
    const { t } = useTranslation("validation");
    const { fontSizes } = useTheme();

    return (
        <FormControl isInvalid={Boolean(error)} isRequired={isRequired} {...inputProps} mt={2}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Controller
                control={control}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                name={name}
                render={(renderProps) => (
                    <Input
                        InputLeftElement={prependedComponent}
                        fontSize={fontSizes.xl}
                        isRequired={isRequired}
                        paddingBottom={1}
                        placeholder={placeholder}
                        value={renderProps.field.value}
                        onBlur={renderProps.field.onBlur}
                        onChangeText={(val) => renderProps.field.onChange(val)}
                        {...inputProps}
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
