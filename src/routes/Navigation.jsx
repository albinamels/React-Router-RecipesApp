import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const loggedIn = localStorage.getItem("loggedIn");
  return (
    <Nav>
      <NavItem>
        <Link to="/">
          <NavLink>Home</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/dishes">
          <NavLink>Dishes</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/instructions">
          <NavLink>Recipes</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/login">
          <NavLink>{loggedIn ? "Logout" : "Login"}</NavLink>
        </Link>
      </NavItem>
    </Nav>
  );
};
