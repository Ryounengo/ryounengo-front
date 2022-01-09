import { Box, ChevronRightIcon, IconButton, VStack } from "native-base";
import { TextInput } from "@common/form";
import { useTranslation } from "react-i18next";
import { ICardEditForm } from "@screens/Card/EditCard/ICardEdit";
import { useFormContext } from "react-hook-form";
import { toKana, isRomaji, isKana, isKanji } from "wanakana";
import { useStyle } from "./style";
import { useRef } from "react";
import { textRegex } from "@utils/regex";

interface IParams {
    submitRecto(): void;
}

export const CardEditRectoForm = (props: IParams) => {
    const { submitRecto } = props;
    const { t } = useTranslation(["common", "card", "validation"]);
    const { formState, control, getValues, setValue } = useFormContext<ICardEditForm>();
    const style = useStyle();
    const { errors } = formState;
    const hiraganaField = useRef(null);

    return (
        <VStack>
            <Box style={style.editCardWrapper}>
                <TextInput
                    control={control}
                    error={errors.front?.mainText}
                    isRequired
                    name="front.mainText"
                    placeholder={t("card:kanaPlaceholder")}
                    ref={hiraganaField}
                    rules={{
                        required: t<string>("validation:required"),
                        validate: (text) => (isKana(text.toString()) ? undefined : t<string>("validation:isKanaError")),
                    }}
                    onBlur={() => setValue("front.mainText", toKana(getValues("front.mainText")))}
                />
                <TextInput
                    control={control}
                    error={errors.front?.secondaryText}
                    name="front.secondaryText"
                    placeholder={t("card:kanjiPlaceholder")}
                    rules={{
                        validate: (text) =>
                            !text.toString().length || isKanji(text.toString())
                                ? undefined
                                : t<string>("validation:isKanjiError"),
                    }}
                    onBlur={() => setValue("front.secondaryText", toKana(getValues("front.secondaryText")))}
                />
                <TextInput
                    control={control}
                    error={errors.front?.optionalText}
                    name="front.optionalText"
                    placeholder={t("card:romajiPlaceholder")}
                    rules={{
                        validate: (text) =>
                            !text.toString().length || isRomaji(text.toString())
                                ? undefined
                                : t<string>("validation:isRomajiError"),
                    }}
                />
                <TextInput
                    control={control}
                    error={errors.front?.exampleText}
                    name="front.exampleText"
                    placeholder={t("card:examplePlaceholder")}
                    rules={{
                        maxLength: { value: 250, message: t("validation:maxLength", { count: 250 }) },
                        pattern: { value: textRegex, message: "validation:textError" },
                    }}
                    onBlur={() => setValue("front.exampleText", toKana(getValues("front.exampleText")))}
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
