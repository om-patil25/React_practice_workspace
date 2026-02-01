import axios from "axios";
import { use, useEffect, useState } from "react";

const CRUDapp = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(0); //not much role of id just to resolve unique key error
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [photo, setPhoto] = useState("");
  const [currentId, setCurrentId] = useState(null);

  const api = axios.create({
    baseURL: "https://fake-json-api.mock.beeceptor.com/users",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const getUsers = async () => {
    const response = await api.get("/");
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const resetForm = () => {
    setName("");
    setUsername("");
    setEmail("");
    setCountry("");
    setPhoto("");
  };

  const postUser = async (e) => {
    const formData = new FormData(e.target);

    const newUser = {
      //for key error
      id: crypto.randomUUID(),
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      country: formData.get("country"),
      photo: formData.get("photo"),
    };

    const request = await api.post("/", newUser);
    setUsers((prev) => [...prev, newUser]);
    console.log(request);
    resetForm();
  };

  const handleEdit = (user) => {
    setId(user.id);
    setName(user.name || "");
    setUsername(user.username || "");
    setEmail(user.email || "");
    setCountry(user.country || "");
    setPhoto(user.photo || "");
    setCurrentId(user.id || "");
  };

  const handleUpdate = async () => {
    if (!currentId) return;

    const updateUser = {
      id,
      name,
      username,
      email,
      country,
      photo,
    };

    const req = await api.put(`/${currentId}`, updateUser);

    setUsers(users.map((user) => (user.id === currentId ? updateUser : user)));

    resetForm();
    console.log(updateUser);
  };

  //for two task with one button
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      handleUpdate();
    } else {
      postUser(e);
    }
  };

  const handleDelete = async (id) => {
    const req = await api.delete(`/${id}`);
    setUsers(users.filter((user) => user.id !== id));
    console.log(req);
  };

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {/* using two way binding */}
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="url"
            name="photo"
            placeholder="Paste link of image"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          {/* <input type="submit" />
          <button onClick={handleUpdate}>update</button> */}
          {/* learned solution */}
          <button type="submit">{currentId ? "Update" : "Add"}</button>
        </form>
      </div>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Country</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>
                  <img src={user.photo} alt={user.name} />
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(user);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CRUDapp;
