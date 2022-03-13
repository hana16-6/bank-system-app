import React from 'react';
import { createContext, useState } from "react";
export const customersContext = createContext();
function CustomerContext({ children }) {
    const [customers, setCustomers] = useState([]);
    return (
        <customersContext.Provider value={{ customers, setCustomers }}>
            {children}
        </customersContext.Provider>
    )
}

export default CustomerContext