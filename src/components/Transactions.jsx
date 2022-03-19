import React from "react";
import { Table, TableContainer, TableTD } from "../styles/Styles.style";
import TransactionsData from "./TransactionsData";

function Transactions() {
  return (
    <>
      <TableContainer>
        <Table>
          <TableTD transactionsID>Sender</TableTD>
          <TableTD transactionsID>Recipient</TableTD>
          <TableTD transactionsID>Amount</TableTD>
        </Table>
        <TransactionsData />
      </TableContainer>
    </>
  );
}

export default Transactions;
