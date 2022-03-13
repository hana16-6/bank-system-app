import React from "react";
import { Outlet, Link } from "react-router-dom";
import { NavUl, NavLI, NavContainer } from "../styles/Styles.style";
function Navbar() {
  return (
    <NavContainer className="container">
      <div>
        <h2>HanaBank</h2>
      </div>
      <NavUl>
        <NavLI>
          <Link className="link_reset" to="/">
            Home
          </Link>
        </NavLI>
        <NavLI>
          <Link className="link_reset" to="/CustomerHome">
            Customers
          </Link>
        </NavLI>
        <NavLI>
          <Link className="link_reset" to="/Transactions">
            Transactions
          </Link>
        </NavLI>
        <Outlet />
      </NavUl>
    </NavContainer>
  );
}

export default Navbar;
