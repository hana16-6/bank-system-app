import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import CustomerContextProvider from "./context/CustomerContext"
import BalanceContextProvider from './context/BalanceContext'
import TransactionsProvider from './context/TransactionsContext'



ReactDOM.render(
  <React.StrictMode>
    <CustomerContextProvider>
      <BalanceContextProvider>
        <TransactionsProvider>
          <Router>
            <App />
          </Router>
        </TransactionsProvider>
      </BalanceContextProvider>
    </CustomerContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
