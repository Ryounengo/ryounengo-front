import { Avatar, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { TRootNavigation } from "@navigation/INavigation";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type TParams = DrawerNavigationProp<TRootNavigation, "drawerStack">;

export const UserAvatar = () => {
    const { openDrawer } = useNavigation<TParams>();

    return (
        <Pressable onPress={openDrawer}>
            <Avatar
                source={{
                    uri: "https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587497063492-3M55NJG231XKWL9PLFL2/Liam_Wong_Tokyo_Nights_Phone_Wallpapers_Cyberpunk_Blade_Runner_TOKYOO_TO_KY_OO_Japan_BookMinutes+To+Midnight.jpg?format=1000w",
                }}
            />
        </Pressable>
    );
};
