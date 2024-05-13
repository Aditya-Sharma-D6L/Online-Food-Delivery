import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const AppBarAfterLogin = ({ setLoggedIn }) => {
  const handleLogout = () => {
    // Perform logout actions, e.g., clear user data from localStorage
    setLoggedIn(false);
  };

  return (
    <>
      <AccountCircleIcon className="" />

      <Link to="/cart" className="text-white">
        <button
          className="text-white px-4 py-2 text-2xl bg-orange-600 hover:bg-white hover:text-black rounded-md p-3 focus:outline-none"
          style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
        >
          Cart
        </button>
      </Link>
      <button
        className="text-white px-4 py-2 text-2xl bg-orange-600 hover:bg-white hover:text-black rounded-md p-3 focus:outline-none"
        onClick={handleLogout}
        style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
      >
        Logout
      </button>
    </>
  );
};

export default AppBarAfterLogin;
