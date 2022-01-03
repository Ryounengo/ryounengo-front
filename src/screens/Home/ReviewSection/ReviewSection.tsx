import { ICard } from "@typings/interfaces";
import { CardReviewList } from "@screens/Home/ReviewSection/CardReviewList";
import { Box, Center, Heading, Pressable } from "native-base";
import { useStyle } from "@screens/Home/ReviewSection/styles";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { TBottomTabNavigation, TRootNavigation } from "@navigation/INavigation";

interface IParams {
    cardReviewList: ICard[];
}

type NavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TBottomTabNavigation, "homeStack">,
    NativeStackNavigationProp<TRootNavigation>
>;

export const ReviewSection = (props: IParams) => {
    const { cardReviewList } = props;
    const style = useStyle();
    const { navigate } = useNavigation<NavigationProps>();

    const goToReview = () => navigate("reviewCards");

    return (
        <Pressable onPress={goToReview}>
            <Box style={style.reviewCard}>
                <Heading>Cards to review</Heading>
                <Center marginY="auto">
                    <CardReviewList cardReviewList={cardReviewList} />
                </Center>
            </Box>
        </Pressable>
    );
};
