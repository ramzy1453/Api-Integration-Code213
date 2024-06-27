import React, { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="first name..."
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="last name..."
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="email..."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="age..."
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password..."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("http://localhost:8000/user/register/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              age,
              password,
            }),
          }).then((r) => {
            if (r.ok) {
              alert("user registered");
            }
          });
        }}
      >
        register
      </button>
    </div>
  );
}
