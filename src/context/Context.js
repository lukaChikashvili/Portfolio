import { createContext, useState } from "react";


export const Context = createContext();

const ContextProvider = ({children}) => {

    const [index, setIndex] = useState(0);
    const [showCards, setShowCards] = useState(false);

    return (
       <Context.Provider value = {{index, setIndex, showCards, setShowCards}}>
         {children}
       </Context.Provider>
    )
}


export default ContextProvider;