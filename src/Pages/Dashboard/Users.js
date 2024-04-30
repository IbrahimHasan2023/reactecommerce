// import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);
  const ShowUsers = users.map((user, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      {/* <td className="d-flex align-items-center gap-4">
        <Link to={`${user.id}`}>
          <FontAwesomeIcon color="green" icon={faPenToSquare} />
        </Link>
        <FontAwesomeIcon onClick={handleDelete} color="red" icon={faTrash} />
      </td> */}
    </tr>
  ));

  return (
    <div className=" w-100 m-3">
      <h2>Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Username</th>
            <th> Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={12} className="text-center">
                No users found
              </td>
            </tr>
          ) : (
            ShowUsers
          )}
        </tbody>
      </Table>
    </div>
  );
}
