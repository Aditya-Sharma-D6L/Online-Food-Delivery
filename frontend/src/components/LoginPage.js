import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyUserData = {
  username: "user",
  password: "pass",
};

const LoginPage = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      username === dummyUserData.username &&
      password === dummyUserData.password
    ) {
      // Update loggedIn state in App.js
      setLoggedIn(true);
      // Redirect to home page
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="border border-gray-300 rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 rounded w-full py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
