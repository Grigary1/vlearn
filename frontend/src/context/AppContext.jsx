import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {


    const currency=import.meta.env.VITE_CURRENCY
    const value = {};

    return (
        <AppContext.Provider value={value}>
            {props.children}  {/* ✅ Correct spelling */}
        </AppContext.Provider>
    );
};
