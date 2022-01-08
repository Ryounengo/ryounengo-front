import { Box, ChevronRightIcon, IconButton } from "native-base";
import { useTranslation } from "react-i18next";
import { SwitchInput } from "@common/form/SwitchInput";
import { useFormContext } from "react-hook-form";
import { ICardEditForm } from "@screens/Card/EditCard/ICardEdit";
import { TextTypeCard } from "@common/Card/CardTypeCard/TextCard";
import { useStyle } from "./style";

interface IParams {
    submitType(): void;
}

export const CardTypeForm = (props: IParams) => {
    const { submitType } = props;
    const { formState, control } = useFormContext<ICardEditForm>();
    const { errors } = formState;
    const style = useStyle();
    const { t } = useTranslation("deck");

    return (
        <Box>
            <Box mb={4}>
                <SwitchInput
                    control={control}
                    error={errors.type?.cardType}
                    label={t("isReversed")}
                    mb={2}
                    name="type.isReversed"
                />
                <TextTypeCard />
            </Box>
            <IconButton icon={<ChevronRightIcon />} style={style.nextButton} onPress={submitType} />
        </Box>
    );
};
