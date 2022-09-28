import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { BASE_URL } from "../constants";
import { Spinner } from "./Spinner";
import { Button, Flexbox, Wrapper } from "./Useres.style";

const fetchUsers = (pageNumber) => {
  return axios.get(BASE_URL + `users?_limit=10&_page=${pageNumber}`);
};
export const Users = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, error } = useQuery(
    ["users", pageNumber],
    () => fetchUsers(pageNumber),
    {
      keepPreviousData: true,
    }
  );
  if (isLoading) {
    return (
      <Flexbox>
        {" "}
        <Spinner fontSize="24" />{" "}
      </Flexbox>
    );
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Users Page</h2>
      <Wrapper>
        <p>Name</p>
        <p>Last Name</p>
        <p>Email</p>
        <p>Gender</p>
        <p>Company</p>
        <p>Department</p>
      </Wrapper>
      {data?.data.map((user) => {
        return (
          <Wrapper key={user.id}>
            <p> {user.first_name} </p> <p>{user.last_name}</p>{" "}
            <p>{user.email}</p> <p>{user.gender}</p> <p>{user.company}</p>{" "}
            <p>{user.department}</p>
          </Wrapper>
        );
      })}
      <Flexbox>
        <Button
          onClick={() => setPageNumber((pageNumber) => pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Prev
        </Button>
        <input
          type="number"
          value={pageNumber}
          onChange={(e) => setPageNumber(e.target.value)}
        ></input>
        <Button
          onClick={() => setPageNumber((pageNumber) => pageNumber + 1)}
          disabled={data?.data.length < 10}
        >
          Next
        </Button>
      </Flexbox>
    </>
  );
};
