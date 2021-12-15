import { FormControl, IBoxProps, useTheme } from "native-base";
import { Controller, FieldError, FieldValues, Path, UseControllerProps } from "react-hook-form";
import { Switch } from "react-native";

interface IParams<T> extends IBoxProps {
    name: Path<T>;
    error: FieldError | undefined;
    control: UseControllerProps<T>["control"];
    label: string;
}

export const SwitchInput = <T extends FieldValues>(props: IParams<T>) => {
    const { name, error, control, label, ...boxProps } = props;
    const { colors } = useTheme();

    return (
        <FormControl {...boxProps} alignItems="center" flexDirection="row" flexWrap="wrap" isInvalid={Boolean(error)}>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Switch
                        ref={field.ref}
                        thumbColor={colors.white}
                        trackColor={{ false: colors.dark[600], true: colors.primary[500] }}
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                    />
                )}
            />
            <FormControl.Label ml={2}>{label}</FormControl.Label>
            <FormControl.ErrorMessage>{error?.message}</FormControl.ErrorMessage>
        </FormControl>
    );
};
