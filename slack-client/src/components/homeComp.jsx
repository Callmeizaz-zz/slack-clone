import React from "react";
import { gql, useQuery } from "@apollo/client";

const allUserQuery = gql`
  {
    allUsers {
      id
      email
    }
  }
`;
const HomeComp = () => {
  const { data, loading } = useQuery(allUserQuery);

  return (
    <div className="users">
      {loading
        ? null
        : data.allUsers.map((u) => (
            <div className="hello" key={u.id}>
              <h1>{u.email}</h1>
            </div>
          ))}
    </div>
  );
};

export default HomeComp;
