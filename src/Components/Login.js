import React, { useState } from "react";
import userAuthContext from "../utils/userAuthContext";

const Login = () => {
  const [, validateUser] = userAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const access = (e) => {
    e.preventDefault();
    if (username && password) {
      console.log({ username, password });
      validateUser({ username, password });
    } else {
      alert("Please fill the form correctly");
    }
  };

  return (
    <div className="--center-all">
      <h1>Login to continue</h1>
      <form>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={access}>Submit</button>
      </form>
    </div>
  );
};
export default Login;