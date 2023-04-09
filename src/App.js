import "./App.css";
import User from "./components/user";
import UserList from "./components/userList";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const handleCall = (Nuser, Nage) => {
    setData((prevState) => {
      return [
        ...prevState,
        { names: Nuser, age: Nage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <User onCall={handleCall} />
      {data != 0 ? <UserList users={data} /> : ""}
    </div>
  );
}

export default App;
