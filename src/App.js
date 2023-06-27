import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <AddUser addNewUser={setUsers} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
