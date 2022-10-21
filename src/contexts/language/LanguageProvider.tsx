import React from "react";
import {useTranslation} from "react-i18next";
import LanguageContext, {LanguageContextType} from "./LanguageContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";

export default function LanguageProvider(props: { children: React.ReactNode }) {

    const {i18n} = useTranslation();
    const [language, setLanguage] = useLocalStorage<string>("language", "en")

    React.useEffect(() => {
        i18n.changeLanguage(language).catch(err => console.log(err));
    }, [language, i18n])

    const value = {
        language,
        setLanguage
    } as LanguageContextType

    return <LanguageContext.Provider value={value}>{props.children}</LanguageContext.Provider>
}