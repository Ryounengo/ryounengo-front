import { createDrawerNavigator } from "@react-navigation/drawer";
import { LoggedNavigation } from "@navigation/LoggedNavigation";
import { DrawerContent } from "@navigation/DrawerNavigation/DrawerContent";
import { useStyle } from "../style";

export const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    const style = useStyle();

    return (
        <Drawer.Navigator
            drawerContent={() => <DrawerContent />}
            screenOptions={{ headerShown: false, drawerStyle: style.navigationCardBackground }}
        >
            <Drawer.Screen component={LoggedNavigation} name="logged" />
        </Drawer.Navigator>
    );
};
