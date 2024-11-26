import {createContext} from "react";


const defaultLanguage = "uk";

export const LanguageContext = createContext(defaultLanguage);


export function getLangFromLocaleStorage() {
    const langFromLocalStorage = window.localStorage.getItem("lang");

    return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
}
