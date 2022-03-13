import React from 'react'
import { Route, Routes } from "react-router-dom"
import Transactions from '../components/Transactions'
import CustomerHome from '../layout/CustomerHome'
import Layout from '../layout/Layout'

function Index() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/CustomerHome" element={<CustomerHome />} />
        </Routes>
    )
}

export default Index