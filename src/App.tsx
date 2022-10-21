import './App.css'
import {ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {HeroSection} from "./pages/Hero/HeroSection";
import {AppHeader} from "./pages/Header/AppHeader";
import LanguageProvider from "./contexts/language/LanguageProvider";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>("colorScheme", "light")
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <LanguageProvider>
            <I18nextProvider i18n={i18n}>
                <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                    <MantineProvider withNormalizeCSS withGlobalStyles
                                     theme={{
                                         colorScheme: colorScheme,
                                         defaultGradient: {from: '#f54b64', to: '#f78361', deg: 20}
                                     }}>
                        <AppHeader/>
                        <HeroSection/>
                    </MantineProvider>
                </ColorSchemeProvider>
            </I18nextProvider>
        </LanguageProvider>
    )
}

export default App
