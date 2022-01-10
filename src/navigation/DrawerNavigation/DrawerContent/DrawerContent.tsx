import { Box, Button, Center, Heading, Select, Text, useColorMode, useTheme, View } from "native-base";
import { useContext, useState } from "react";
import { UserContext } from "@context";
import { Switch } from "react-native";
import { useTranslation } from "react-i18next";
import { logout } from "@utils/authUtils";
import { EModalReason } from "@navigation/DrawerNavigation/DrawerContent/IDrawerContent";
import GitHubImage from "@static/images/github.svg";
import { useStyle } from "./style";

export const DrawerContent = () => {
    const { user, setUser } = useContext(UserContext);
    const { colors } = useTheme();
    const { toggleColorMode, colorMode } = useColorMode();
    const [isDarkMode, setIsDarkMode] = useState(colorMode === "dark");
    const [confirmationReason, setConfirmationReason] = useState<EModalReason>();
    const { t } = useTranslation("user");
    const style = useStyle();
    const [language, setLanguage] = useState("en");

    const logUserOut = () => logout().then(() => setUser(undefined));
    const deleteAccount = () => console.log("Account delete Pouf !");

    return (
        <View height="100%">
            <Button onPress={() => setConfirmationReason(EModalReason.LOGOUT)}>{t("logout")}</Button>
            <Box style={style.profile}>
                <Text style={style.username}>{user?.username}</Text>
                <Text variant="caption">{user?.email}</Text>
            </Box>
            <Heading style={style.appearance}>Appearance</Heading>
            <Box style={style.appearanceWrapper}>
                <Box alignItems="center" flexDirection="row" flexWrap="wrap" m={2}>
                    <Switch
                        thumbColor={colors.white}
                        trackColor={{ false: colors.dark[600], true: colors.primary[500] }}
                        value={isDarkMode}
                        onValueChange={(isDark) => {
                            setIsDarkMode(isDark);
                            toggleColorMode();
                        }}
                    />
                    <Text ml={2}>Dark mode</Text>
                </Box>
                <Box style={style.languageWrapper}>
                    <Select defaultValue="fr" selectedValue={language} onValueChange={(value) => setLanguage(value)}>
                        <Select.Item label="English" value="en" />
                        <Select.Item label="Francais" value="fr" />
                    </Select>
                </Box>
            </Box>
            <Center my={4}>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                    Contribute to Ryoumengo
                </Text>
                <GitHubImage color={isDarkMode ? colors.white : colors.dark[100]} height={40} width={40} />
            </Center>
            <Button onPress={() => setConfirmationReason(EModalReason.DELETE_ACCOUNT)}>DeleteMyAccount</Button>
            {confirmationReason && (
                <>
                    <Text>{confirmationReason === EModalReason.LOGOUT ? t("logout") : "delete your account ?"}</Text>
                    <Button onPress={() => setConfirmationReason(undefined)}>Cancel</Button>
                    <Button onPress={confirmationReason === EModalReason.LOGOUT ? logUserOut : deleteAccount}>
                        Confirm
                    </Button>
                </>
            )}
            <Center style={style.contactLinks}>
                <Text fontSize="md">Contact us</Text>
                <Text fontSize="md">Bug Report</Text>
                <Text fontSize="md">Want More ?</Text>
            </Center>
        </View>
    );
};
