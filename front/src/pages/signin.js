import React, { useState } from "react";
import PropTypes from "prop-types";
import App from "../App";

async function signUpUser(credentials) {
  return fetch("http://localhost:8080/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
async function signInUser(credentials) {
  return fetch("http://localhost:8080/api/users/signin", {
    method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }).then((data) => data.json());
}

export default function SignIn({ setToken }) {
  const [accountExist, setAccountExist] = useState(true);
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await signUpUser({
          name,
          mail,
          password,
        });
        setToken(token);
        return App();

  };

  if(accountExist){
    return (
      <div className="login-wrapper">
        <h1>Please Sign In</h1>
        <button type="submit" onClick={() => setAccountExist(false)}>I don't have an account</button>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Mail</p>
            <input type="text" onChange={(e) => setMail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    );
  }
  else {
  return (
      <div className="login-wrapper">
        <h1>Please Sign Up</h1>
        <button type="submit" onClick={() => setAccountExist(true)}>I have an account</button>
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
              onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
    }
}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};
