import { TRootNavigation } from "@navigation/INavigation";
import { StackScreenProps } from "@react-navigation/stack";
import { useCreateCard } from "@screens/Card/CreateCard/useCreateCard";
import { CardEdit } from "@common";

type NavigationProps = StackScreenProps<TRootNavigation, "createCard">;

export const CreateCard = (props: NavigationProps) => {
    const { route } = props;
    const { submit, isLoading } = useCreateCard(route.params.deckId);

    return <CardEdit isEdit isLoading={isLoading} submit={submit} />;
};
