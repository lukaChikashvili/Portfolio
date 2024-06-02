import { createContext, useState } from "react";


export const Context = createContext();

const ContextProvider = ({children}) => {

    const [index, setIndex] = useState(0);

    return (
       <Context.Provider value = {{index, setIndex}}>
         {children}
       </Context.Provider>
    )
}


export default ContextProvider;