import React, { useContext } from "react";
import { transactionsContext } from "../context/TransactionsContext";
import { Table, TableTD } from "../styles/Styles.style";

function TransactionsData() {
  const [transactions, setTransactions] = useContext(transactionsContext);
  return (
    <>
      {transactions ? (
        transactions?.map((transaction) => {
          return (
            <Table>
              <TableTD>{transaction.senderProp}</TableTD>
              <TableTD>{transaction.recipientProp}</TableTD>
              <TableTD>{transaction.recipientProp}</TableTD>
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
