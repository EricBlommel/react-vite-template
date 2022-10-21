import React from "react";

export interface LanguageContextType {
    language: string;
    setLanguage: (language: string) => void;
}

let LanguageContext = React.createContext<LanguageContextType>(null!);

export default LanguageContext;