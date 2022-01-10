import { Box, FormControl, Text, useColorMode, useTheme, View } from "native-base";
import { useContext, useState } from "react";
import { UserContext } from "@context";
import { Switch } from "react-native";
import { useStyle } from "./style";

export const DrawerContent = () => {
    const { user } = useContext(UserContext);
    const { colors } = useTheme();
    const style = useStyle();
    const { toggleColorMode, colorMode } = useColorMode();
    const [isDarkMode, setIsDarkMode] = useState(colorMode === "dark");

    return (
        <View>
            <Text style={style.text}>logout</Text>
            <Box>
                <Text>{user?.email}</Text>
                <Text>{user?.username}</Text>
            </Box>
            <Text>Appearance</Text>
            <FormControl alignItems="center" flexDirection="row" flexWrap="wrap">
                <Switch
                    thumbColor={colors.white}
                    trackColor={{ false: colors.dark[600], true: colors.primary[500] }}
                    value={isDarkMode}
                    onValueChange={(isDark) => {
                        setIsDarkMode(isDark);
                        toggleColorMode();
                    }}
                />
                <FormControl.Label ml={2}>Dark mode</FormControl.Label>
            </FormControl>
            <Text>En</Text>
            <Text>Contribute to Ryoumengo</Text>
            <Text>gitLogo</Text>
            <Text>DeleteMyAccount</Text>
            <Text>contactUs</Text>
            <Text>WantMore?</Text>
        </View>
    );
};
