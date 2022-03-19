import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, TableTD } from "../styles/Styles.style";

function TransactionsData() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/transactions");
      setTransactions(data);
    })();
  }, []);
  return (
    <>
      {transactions ? (
        transactions?.map((transaction) => {
          return (
            <Table key={transaction.id}>
              <TableTD transactionsID>{transaction.senderProp}</TableTD>
              <TableTD transactionsID>{transaction.recipientProp}</TableTD>
              <TableTD transactionsID>{transaction.amount}</TableTD>
            </Table>
          );
        })
      ) : (
        <h1>loading....</h1>
      )}
    </>
  );
}

export default TransactionsData;
