import { Input, SearchIcon } from "native-base";
import { useTranslation } from "react-i18next";
import { Controller, FieldValues, Path, UseControllerProps } from "react-hook-form";
import { useStyle } from "./style";

interface IParams<T> {
    name: Path<T>;
    control: UseControllerProps<T>["control"];
    submit(): void;
}

export const SearchBar = <T extends FieldValues>(props: IParams<T>) => {
    const { name, control, submit } = props;
    const { t } = useTranslation("common");
    const style = useStyle();

    return (
        <Controller
            control={control}
            name={name}
            render={(renderProps) => (
                <Input
                    InputLeftElement={<SearchIcon size={6} style={[style.icon, style.searchIcon]} />}
                    // InputRightElement={<AddIcon size={5} style={[style.icon, style.moreIcon]} />} //TODO add filter options
                    placeholder={t("searchPlaceholder")}
                    style={style.searchBar}
                    value={renderProps.field.value}
                    variant="unstyled"
                    onBlur={renderProps.field.onBlur}
                    onChangeText={(val) => renderProps.field.onChange(val)}
                    onSubmitEditing={submit}
                />
            )}
        />
    );
};
