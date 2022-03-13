import React from 'react'
import { createContext, useState } from "react";
export const transactionsContext = createContext();
function TransactionsContext({ children }) {
    const [transactions, setTransactions] = useState([]);
    return (
        <transactionsContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </transactionsContext.Provider>
    )
}

export default TransactionsContext