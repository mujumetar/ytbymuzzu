// import { createContext, useContext, useState } from "react";

// export const UtilsContext = createContext()

// export const UtilsContextProvider = ({ children }) => {

//     const [isSidebar, setIsSlidebar] = useState(false)
//     const [mobileShow, setMobileShow] = useState(false);

//     return <UtilsContext.Provider value={{ isSidebar, setIsSlidebar, mobileShow, setMobileShow }}>
//         {children}
//     </UtilsContext.Provider>
// }

// export const useUtils = () => {
//     const utilsContext = useContext(UtilsContext)
//     if (utilsContext) return;

//     return utilsContext;
// } 