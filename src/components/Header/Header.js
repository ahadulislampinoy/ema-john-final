import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../contexts/UserContext";
import "./Header.css";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    //! sign out user
    signOutUser()
      .then(() => {
        navigate("/");
      })
      .error((error) => console.error(error));
  };

  return (
    <nav className="menu">
      <Link to="/shop">
        <img src={logo} alt="" />
      </Link>
      <div className="menu-links">
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Shop
        </NavLink>
        <NavLink to="/orders">Orders</NavLink>
        {user?.uid ? (
          <button onClick={handleSignOut} className="signout-btn">
            Sign Out
          </button>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
