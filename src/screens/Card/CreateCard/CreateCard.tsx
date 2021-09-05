import { TDeckNavigation } from "@navigation/INavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { useCreateCard } from "@screens/Card/CreateCard/useCreateCard";
import { CardEdit } from "@common";

type NavigationProps = StackScreenProps<TDeckNavigation, "createCard">;

export const CreateCard = (props: NavigationProps) => {
    const { route } = props;
    const { submit, postCreateCardState } = useCreateCard(route.params.deckId);

    return <CardEdit isEdit isLoading={postCreateCardState.isLoading} submit={submit} />;
};
