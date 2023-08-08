import { createContext, useState } from "react";

export const Datacontext = createContext();

const DataProvider = ({children}) =>{

    const [html, sethtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

    return(
        <Datacontext.Provider
            value={{
                html,
                sethtml,
                css,
                setCss,
                js,
                setJs
            }}
        >

        {children}
        
        </Datacontext.Provider>
    )
}

export default DataProvider;