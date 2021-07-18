import { Button, Icon, Select, VStack } from "native-base";
import { EDeckType, TCreateDeckStackParams } from "./ICreateDeck";
import { StackScreenProps } from "@react-navigation/stack";
import { useCreateDeck } from "./useCreateDeck";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TextInput } from "../../../common";

type TParams = StackScreenProps<TCreateDeckStackParams, "deckEdit">;

export const DeckEdit = (props: TParams) => {
    const { route } = props;
    const { t } = useTranslation(["common", "deck", "validation"]);
    const { formMethods, submit, postCreateDeckState } = useCreateDeck(route.params.deckType);
    const { control, handleSubmit, formState } = formMethods;
    const { errors } = formState;

    return (
        <VStack>
            <TextInput
                control={control}
                error={errors.name}
                isRequired
                label={t("name")}
                name="name"
                placeholder={t("name")}
                rules={{
                    minLength: { value: 3, message: t("validation:minLength", { count: 3 }) },
                    maxLength: { value: 50, message: t("validation:maxLength", { count: 50 }) },
                }}
            />
            <TextInput
                control={control}
                error={errors.name}
                label={t("description")}
                name="description"
                placeholder={t("description")}
                rules={{
                    minLength: { value: 3, message: t("validation:minLength", { count: 3 }) },
                    maxLength: { value: 150, message: t("validation:maxLength", { count: 150 }) },
                }}
            />
            <Controller
                control={control}
                name="tags"
                render={(renderProps) => (
                    <Select
                        dropdownCloseIcon={<Icon name="arrow-drop-down" size={6} />}
                        dropdownOpenIcon={<Icon name="arrow-drop-up" size={6} />}
                        placeholder={t("deck:hiragana")}
                        selectedValue={renderProps.field.value}
                        width={150}
                        onValueChange={(itemValue: string) => {
                            renderProps.field.onChange(itemValue);
                        }}
                    >
                        {Object.values(EDeckType).map((deckType) => (
                            <Select.Item
                                key={deckType}
                                label={t(`deck:${deckType.toLocaleLowerCase()}`)}
                                value="deckType"
                            />
                        ))}
                    </Select>
                )}
                rules={{ required: t<string>("validation:required") }}
            />
            <Button isLoading={postCreateDeckState.isLoading} variant="outline" onPress={handleSubmit(submit)}>
                {t("submit")}
            </Button>
        </VStack>
    );
};
