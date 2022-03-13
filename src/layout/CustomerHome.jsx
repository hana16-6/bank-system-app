import { Drawer } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Customers from "../components/Customers";
import PopUp from "../components/PopUp";
import { customersContext } from "../context/CustomerContext";
import { Table, TableContainer, TableTD } from "../styles/Styles.style";

function CustomerHome() {
  const { customers, setCustomers } = useContext(customersContext);
  const [popupClose, setpopupClose] = useState(false);
  const [trigger, settrigger] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const handleOpenPopup = (e) => {
    customers.map((customer) => {
      if (+e.target.id === customer.id) {
        settrigger(true);
        setpopupClose(true);
        setUser(() => ({
          id: customer.id,
          name: customer.name,
          email: customer.email,
          currentBalance: customer.currentBalance,
        }));
      }
      return customer;
    });
  };
  useEffect(() => {}, [user]);

  return (
    <>
      <TableContainer>
        <Table>
          <TableTD>ID</TableTD>
          <TableTD>Name</TableTD>
          <TableTD>Email</TableTD>
          <TableTD>Current Balance</TableTD>
          <TableTD>transfer</TableTD>
        </Table>
        <div>
          <Customers transfer={handleOpenPopup} />
        </div>
      </TableContainer>
      <div className="drawer">
        <Drawer
          style={{ backgroundColor: "transparent " }}
          anchor="top"
          open={popupClose}
          onClose={() => setpopupClose(false)}
        >
          <PopUp
            trigger={trigger}
            user={user}
            setpopupClose={setpopupClose}
            settrigger={settrigger}
          />
        </Drawer>
      </div>
    </>
  );
}
export default CustomerHome;
