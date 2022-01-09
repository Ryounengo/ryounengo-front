import { ICard, IReversedCard } from "@typings/interfaces";
import { Text } from "native-base";

export const getReverseCard = (card: ICard): IReversedCard => ({
    reverseToReview: card.reverseToReview,
    deck: card.deck,
    toReview: card.toReview,
    back: card.front,
    front: card.back,
    id: card.id,
    type: card.type,
    example: card.example,
    isReversed: true,
});

export const getColoredExample = (example: string, front: string[]) => {
    const coloredExample = front.flatMap((field) => {
        const index = example.indexOf(field);

        if (index >= 0) {
            return [
                <>
                    {example.substr(0, index)}
                    <Text color="primary.500">{field}</Text>
                    {example.substr(index + field.length)}
                </>,
            ];
        }

        return [];
    });

    return coloredExample[0] ?? example;
};
