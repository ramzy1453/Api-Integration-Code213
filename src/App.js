import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Form";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(function () {
    fetch("http://localhost:8000/user/")
      .then((r) => r.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);
  return (
    <div>
      <div className="App">
        {users.map((user) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.email}</div>
            <div>{user.country}</div>
          </div>
        ))}
      </div>
      <Form />
    </div>
  );
}

export default App;
