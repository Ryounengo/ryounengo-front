import { Avatar, Pressable } from "native-base";

export const UserAvatar = () => {
    return (
        <Pressable>
            <Avatar
                source={{
                    uri: "https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587497063492-3M55NJG231XKWL9PLFL2/Liam_Wong_Tokyo_Nights_Phone_Wallpapers_Cyberpunk_Blade_Runner_TOKYOO_TO_KY_OO_Japan_BookMinutes+To+Midnight.jpg?format=1000w",
                }}
            />
        </Pressable>
    );
};
