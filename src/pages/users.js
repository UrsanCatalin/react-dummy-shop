import { useEffect, useState } from "react";
import { getAllUsers } from "../services/api";
import UserCard from "../components/userCard/userCard";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((data) => setUsers(data.users))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {users.map((user, index) => {
        return <UserCard
          image={user?.image}
          fullName={`${user?.firstName} ${user?.lastName}`}
          maidenName={user?.maidenName}
          email={user?.email}
          address={user?.address.address}
          city={user?.address.city}
        />
      })}

    </div>
  );
}

export default Users;
