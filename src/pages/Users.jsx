import { useEffect, useState } from "react";
import API from "../api";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async () => {
    try {
      console.log(form);
      const res = await API.post("/users", form);
      console.log(res.data);
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Users</h1>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        placeholder="Address"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <button onClick={addUser}>Add User</button>

      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UsersPage;
