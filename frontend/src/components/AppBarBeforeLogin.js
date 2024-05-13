import React from "react";
import { useNavigate } from "react-router-dom";

const AppBarBeforeLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to /login path
    navigate("/login");
  };

  return (
    <>
      <button
        className="text-white px-4 py-2 text-2xl bg-orange-600 hover:text-black hover:bg-white rounded-md p-3 focus:outline-none"
        onClick={handleLogin}
        style={{
          flexGrow: 1,
          fontFamily: "'Freeman', sans-serif",
          letterSpacing: "1px",
        }}
      >
        Login
      </button>
      <button
        style={{
          flexGrow: 1,
          fontFamily: "'Freeman', sans-serif",
          letterSpacing: "1px",
        }}
        className="text-white px-4 py-2 text-2xl bg-orange-600 hover:bg-white hover:text-black rounded-md p-3 focus:outline-none"
      >
        Signup
      </button>
    </>
  );
};

export default AppBarBeforeLogin;
