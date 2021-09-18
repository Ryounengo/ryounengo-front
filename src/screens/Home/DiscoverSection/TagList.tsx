import { Box, HStack } from "native-base";

interface IParams {
    tagList: string[];
}

export const TagList = (props: IParams) => {
    const { tagList } = props;

    return (
        <HStack>
            {tagList.map((tag) => (
                <Box key={tag}>{tag}</Box>
            ))}
        </HStack>
    );
};
