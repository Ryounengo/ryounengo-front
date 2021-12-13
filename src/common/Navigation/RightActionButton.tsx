import { IconButton, IIconButtonProps, ThreeDotsIcon } from "native-base";

export const RightActionButton = (props: IIconButtonProps) => {
    return <IconButton {...props} borderRadius="full" icon={<ThreeDotsIcon />} marginRight={4} />;
};
