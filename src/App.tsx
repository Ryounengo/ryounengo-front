import { NativeBaseProvider } from "native-base";
import { Router } from "./Router";

const App = () => {
    return (
        <NativeBaseProvider>
            <Router />
        </NativeBaseProvider>
    );
};

export default App;
