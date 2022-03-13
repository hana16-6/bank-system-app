import React from 'react'
import { createContext, useState } from "react";
export const BalaneContext = createContext();
function BalanceContext({ children }) {
    const [balance, setBalance] = useState(0);
    return (
        <BalaneContext.Provider value={{ balance, setBalance }}>
            {children}
        </BalaneContext.Provider>
    )
}

export default BalanceContext