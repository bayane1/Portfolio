import { IntlProvider } from "react-intl";
import EnglishData from "../i18n/en.json"
import FrenchData from "../i18n/fr.json"


const messages = {
    en: EnglishData,
    fr: FrenchData
}
const { createContext, useState, useContext } = require("react");

const LocalContext = createContext();

export function LocalProvider ({children}){
    const [local,  setLocal] = useState('fr')


    return <LocalContext.Provider value={[local, setLocal]}>
        <IntlProvider locale={local} messages = {messages[local]}>
          {children}
        </IntlProvider>

</LocalContext.Provider>
}

export function useLocale() {
    const [local, setLocal] = useContext(LocalContext)
    return [local, setLocal]
}


