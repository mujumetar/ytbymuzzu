import { createContext, useContext, useState } from "react";

const UtilsContext = createContext(null)

export UtilsContextProvider = ({children}) =>{

    const [isSidebar,setIsSlidebar] = useState(false)
    const [mobileShow,setMobileShow] = useState(false);

    return  <UtilsContext.Provider value={{isSidebar,setIsSlidebar,mobileShow,setMobileShow}}>
    {children}
    </UtilsContext.Provider>
} 

export const useUtils = () =>{
    const UtilsContext = useContext(UtilsContext)
    if(UtilsContext) return null;

    return UtilsContext;
} 