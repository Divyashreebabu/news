import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted credentials:", { email, password });

    axios
      .post("http://localhost:3001/api/signin", { email, password })
      .then((res) => {
        console.log("Response:", res.data);
        if (res.data === "success") {
          navigate("/news");
        } else {
          console.error("Invalid response from server");
        }
      })
      .catch((error) => {
        console.error("Error during sign-in:", error.message);
      });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
