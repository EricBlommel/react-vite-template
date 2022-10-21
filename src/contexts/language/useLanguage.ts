import React from "react";
import LanguageContext from "./LanguageContext";

export default function useLanguage() {
    return React.useContext(LanguageContext);
}