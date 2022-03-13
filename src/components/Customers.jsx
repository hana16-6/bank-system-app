import React, { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Button, Table, TableTD } from "../styles/Styles.style";
import { customersContext } from "../context/CustomerContext";
function Customers({ transfer }) {
  const { customers, setCustomers } = useContext(customersContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/customers");
      setCustomers(data);
    })();
  }, [`${customers}`]);

  return (
    <>
      {customers ? (
        customers?.map((customer) => {
          return (
            <Table key={customer.id}>
              <TableTD>{customer.id}</TableTD>
              <TableTD>{customer.name}</TableTD>
              <TableTD>{customer.email}</TableTD>
              <TableTD>{customer.currentBalance}$</TableTD>
              <TableTD>
                <Button id={customer.id} onClick={transfer}>
                  View Customer
                </Button>
              </TableTD>
            </Table>
          );
        })
      ) : (
        <h1>loading....</h1>
      )}
    </>
  );
}

export default Customers;
