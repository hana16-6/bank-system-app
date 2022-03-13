import { Button, PopUpConatiner } from '../styles/Styles.style'
import { MenuItem, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from 'react';
import { customersContext } from '../context/CustomerContext';
import { BalaneContext } from '../context/BalanceContext';
import { transactionsContext } from '../context/TransactionsContext';
function PopUp(props) {

    const [optio, setOption] = useState("");
    // const [transactions, setTransactions] = useContext(transactionsContext);
    const [transactions, setTransactions] = useState([]);

    let CustomerBalance = 0;
    let customerID = 0;
    let sender = "";
    let recipient = "";
    const handleChange = (event) => {
        setOption((prev) => prev = event.target.value)

    }
    const { customers, setCustomers } = useContext(customersContext);
    const { balance, setBalance } = useContext(BalaneContext);
    const inputEl = useRef(null);
    // const filterCustomers = (arr) => {
    //     let newArr = arr.filter((res) => {
    //         if (+res.id === +optio) {
    //             axios({
    //                 method: "PATCH",
    //                 headers: { "content-type": "application/json" },
    //                 data: {
    //                     currentBalance: +res.currentBalance + +inputEl.current.value,
    //                 },
    //                 url: `http://localhost:3000/Customers/${optio}`,
    //             })
    //         }
    //         return (res)
    //     }
    //     )
    //     setCustomers(newArr);
    // }
    const transfer = () => {

        let newArr = customers.map((customer) => {
            if (+props.user.id === customer.id && +customer.id !== +optio && inputEl.current.value > 0 && customer.currentBalance > 0 && customer.currentBalance > inputEl.current.value && optio !== "") {
                CustomerBalance = +customer.currentBalance;
                customerID = customer.id;
                sender = customer.name;
                console.log("sender", sender)
                setBalance((prev) => prev = +customer.currentBalance - +inputEl.current.value)
                axios({
                    method: "PATCH",
                    headers: { "content-type": "application/json" },
                    data: {

                        currentBalance: +customer.currentBalance - +inputEl.current.value,
                    },
                    url: `http://localhost:3000/Customers/${customer.id}`,
                });
            }
            return customer;
        }).filter((res) => {
            if (+res.id === +optio && CustomerBalance > 0 && CustomerBalance > inputEl.current.value && +res.id !== +customerID) {
                recipient = res.name;
                console.log("recipient", recipient);
                axios({
                    method: "PATCH",
                    headers: { "content-type": "application/json" },
                    data: {
                        currentBalance: +res.currentBalance + +inputEl.current.value,
                    },
                    url: `http://localhost:3000/Customers/${optio}`,
                })
            }
        }
        )

        // .filter((res) =>
        //     +res.id === +optio && axios({
        //         method: "PATCH",
        //         headers: { "content-type": "application/json" },
        //         data: {

        //             currentBalance: +res.currentBalance + +inputEl.current.value,
        //         },
        //         url: `http://localhost:3000/Customers/${optio}`,
        //     })
        // )
        // filterCustomers(newArr)

        setCustomers(newArr);
        const newTrans = { senderProp: sender, recipientProp: recipient };
        // const trans = [...transactions, newTrans];
        transactions.push(newTrans)

        // setTransactions((prev) => prev = trans);
        console.log(transactions)
        props.settrigger(false);
        props.setpopupClose(false);
    };
    console.log("transactions", transactions)
    useEffect(() => { }, [balance, optio, transactions]);
    return props.trigger ? (
        <PopUpConatiner>
            <span onClick={() => {
                props.settrigger(false);
                props.setpopupClose(false);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </span>
            <div>
                <p>Name: {props.user.name}</p>
                <p>Email: {props.user.email}</p>
                <p>Current Balance: {balance > 0 ? balance : props.user.currentBalance}$</p>
            </div>
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={optio}
                    onChange={handleChange}
                    helperText="Please select your user"
                >
                    {customers.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}

                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <input type="number" ref={inputEl} />
            <Button onClick={transfer}>
                transfer
            </Button>
        </PopUpConatiner>
    ) : ("")
}

export default PopUp