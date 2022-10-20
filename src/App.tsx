import './App.css'
import {ColorScheme, ColorSchemeProvider, MantineProvider, useMantineColorScheme} from "@mantine/core";
import {HeroSection} from "./pages/Hero/HeroSection";
import {AppHeader} from "./pages/Header/AppHeader";
import {useState} from "react";

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withNormalizeCSS withGlobalStyles
                theme={{colorScheme: colorScheme, defaultGradient: {from: '#f54b64', to: '#f78361', deg: 20}}}>
                <AppHeader/>
                <HeroSection/>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App
