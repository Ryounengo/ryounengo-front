import { Box, ChevronRightIcon, IconButton, VStack } from "native-base";
import { TextInput } from "@common/form";
import { textRegex } from "@utils/regex";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { ICardEditForm } from "@screens/Card/EditCard/ICardEdit";
import { useStyle } from "@screens/Card/EditCard/style";

interface IParams {
    submit(): void;
    isLoading: boolean;
}

export const CardEditVersoForm = (props: IParams) => {
    const { submit, isLoading } = props;
    const { t } = useTranslation(["common", "card", "validation"]);
    const { formState, control } = useFormContext<ICardEditForm>();
    const style = useStyle();
    const { errors } = formState;

    return (
        <VStack>
            <Box style={style.editCardWrapper}>
                <TextInput
                    control={control}
                    error={errors.back?.mainText}
                    isRequired
                    name="back.mainText"
                    placeholder={t("card:mainTextPlaceholder")}
                    rules={{
                        required: t<string>("validation:required"),
                        pattern: { value: textRegex, message: "validation:textError" },
                    }}
                />
                <TextInput
                    control={control}
                    error={errors.back?.optionalText}
                    name="back.optionalText"
                    placeholder={t("card:optionalTextPlaceholder")}
                    rules={{
                        pattern: { value: textRegex, message: "validation:textError" },
                    }}
                />
            </Box>
            <IconButton
                icon={<ChevronRightIcon />}
                isDisabled={isLoading}
                mt={-5}
                style={style.nextButton}
                onPress={submit}
            />
        </VStack>
    );
};
