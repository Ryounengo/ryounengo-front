import { Checkbox, FormControl, Text } from "native-base";
import { Controller, FieldError, FieldValues, Path, UseControllerProps } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ViewStyle } from "react-native";

interface IParams<T> {
    name: Path<T>;
    error: FieldError | undefined;
    control: UseControllerProps<T>["control"];
    label: string;
    isRequired?: boolean;
    style?: ViewStyle;
}

export const CheckboxInput = <T extends FieldValues>(props: IParams<T>) => {
    const { name, error, control, label, isRequired, style } = props;
    const { t } = useTranslation("validation");

    return (
        <FormControl isInvalid={Boolean(error)} isRequired={isRequired} style={style}>
            <Controller
                control={control}
                name={name}
                render={(renderProps) => (
                    <Checkbox
                        isInvalid={Boolean(error)}
                        value={renderProps.field.value}
                        onChange={(isSelected) => renderProps.field.onChange(isSelected)}
                    >
                        <Text ml={2}>{label}</Text>
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
