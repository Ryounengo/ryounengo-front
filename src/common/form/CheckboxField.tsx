import { Checkbox, FormControl, Text } from "native-base";
import { Controller, FieldError, FieldValues, UseControllerProps } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface IParams<T> {
    name: string;
    error: FieldError | undefined;
    control: UseControllerProps<T>["control"];
    label: string;
    isRequired?: boolean;
}

export const CheckboxField = <T extends FieldValues>(props: IParams<T>) => {
    const { name, error, control, label, isRequired } = props;
    const { t } = useTranslation("validation");

    return (
        <FormControl isInvalid={Boolean(error)} isRequired>
            <Controller
                control={control}
                name={name}
                render={(renderProps) => (
                    <Checkbox
                        isInvalid={Boolean(error)}
                        value={renderProps.field.value}
                        onChange={(isSelected) => renderProps.field.onChange(isSelected)}
                    >
                        <Text>{label}</Text>
                    </Checkbox>
                )}
                rules={{
                    required: { value: Boolean(isRequired), message: t("required") },
                }}
            />
            <FormControl.ErrorMessage>{error?.message}</FormControl.ErrorMessage>
        </FormControl>
    );
};
