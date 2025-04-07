import React, { useEffect, useState } from "react";
import { UserCard } from "./user-card";
import { User } from "../types";

const DEFAULT_USERS = [
  { id: 1, name: "Rod", email: "rod@gmail.com" },
  { id: 2, name: "John Doe", email: "john@gmail.com" },
  { id: 3, name: "Jane Doe", email: "jane@gmail.com" },
];

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUsers(DEFAULT_USERS);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1>Users Lists</h1>
        <div className="flex flex-col gap-2 bg-gray-200 p-4 rounded-md max-w-sm">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
            />
          ))}
        </div>
      </div>
    </>
  );
}
