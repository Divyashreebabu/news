import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup details:", { fname, lname, email, password });

    axios
      .post("http://localhost:3001/api/signup", { fname, lname, email, password })
      .then((res) => {
        console.log("Response:", res.data);
        alert("Signup Success");
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Error during signup:", error.message);
        alert("Signup failed. Please try again.");
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
