import React from "react";
import { Table, TableContainer, TableTD } from "../styles/Styles.style";

function Transactions() {
  return (
    <>
      <TableContainer>
        <Table>
          <TableTD transactionsID>Sender</TableTD>
          <TableTD transactionsID>Recipient</TableTD>
          <TableTD transactionsID>Amount</TableTD>
        </Table>
      </TableContainer>
    </>
  );
}

export default Transactions;
