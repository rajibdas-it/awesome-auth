import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <div className="navbar bg-base-100 w-[80%] mx-auto">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl text-blue-400">
          Awesome Auth
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          {user?.email && (
            <li>
              <small>Welcome, {user.email}</small>
            </li>
          )}

          <button onClick={handleSignOut} className="btn btn-outline btn-info">
            Log Out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
