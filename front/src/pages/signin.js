import React, { useState } from "react";
import PropTypes from "prop-types";
import App from "../App";

async function signInUser(credentials) {
  return fetch("http://localhost:8080/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function SignIn({ setToken }) {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await signInUser({
      name,
      mail,
      password,
    });
    setToken(token);
    return App();
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <p>Mail</p>
          <input type="text" onChange={(e) => setMail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};
