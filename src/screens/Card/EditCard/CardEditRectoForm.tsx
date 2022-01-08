import { Box, ChevronRightIcon, IconButton, VStack } from "native-base";
import { TextInput } from "@common/form";
import { textRegex } from "@utils/regex";
import { useTranslation } from "react-i18next";
import { ICardEditForm } from "@screens/Card/EditCard/ICardEdit";
import { useFormContext } from "react-hook-form";
import { useStyle } from "./style";

interface IParams {
    submitRecto(): void;
}

export const CardEditRectoForm = (props: IParams) => {
    const { submitRecto } = props;
    const { t } = useTranslation(["common", "card", "validation"]);
    const { formState, control } = useFormContext<ICardEditForm>();
    const style = useStyle();
    const { errors } = formState;

    return (
        <VStack>
            <Box style={style.editCardWrapper}>
                <TextInput
                    control={control}
                    error={errors.front?.mainText}
                    isRequired
                    name="front.mainText"
                    placeholder={t("card:kanaPlaceholder")}
                    rules={{
                        required: t<string>("validation:required"),
                        pattern: { value: textRegex, message: "validation:textError" },
                    }}
                />
                <TextInput
                    control={control}
                    error={errors.front?.secondaryText}
                    name="front.secondaryText"
                    placeholder={t("card:kanjiPlaceholder")}
                    rules={{
                        pattern: { value: textRegex, message: "validation:textError" },
                    }}
                />
                <TextInput
                    control={control}
                    error={errors.front?.optionalText}
                    name="front.optionalText"
                    placeholder={t("card:romajiPlaceholder")}
                    rules={{
                        pattern: { value: textRegex, message: "validation:textError" },
                    }}
                />
                <TextInput
                    control={control}
                    error={errors.front?.exampleText}
                    name="front.exampleText"
                    placeholder={t("card:examplePlaceholder")}
                    rules={{
                        maxLength: { value: 450, message: t("validation:maxLength", { count: 250 }) },
                        pattern: { value: textRegex, message: "validation:textError" },
                    }}
                />
            </Box>
            <IconButton
                icon={<ChevronRightIcon color={style.nextButton.color} />}
                mt={-5}
                style={style.nextButton}
                onPress={submitRecto}
            />
        </VStack>
    );
};
