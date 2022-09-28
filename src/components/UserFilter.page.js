import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { BASE_URL } from "../constants";
import { Spinner } from "./Spinner";
import { Dropdown, Flexbox, HeadingWrapper, Wrapper } from "./Useres.style";

const fetchUsers = () => {
  return axios.get(BASE_URL + `users`);
};
export const UserFilter = () => {
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const { isLoading, data, error } = useQuery(
    ["users-filter"],
    () => fetchUsers(),
    {
      keepPreviousData: true,
      select: (data) => {
        const users = data.data.filter(
          (user) =>
            (gender === "" ? user : user.gender === gender) &&
            (department === "" ? user : user.department === department)
        );
        return users;
      },
    }
  );

  const { data: userDept } = useQuery(["get-departments"], fetchUsers, {
    select: (data) => {
      const departments = data.data.map((user) => user.department);
      const unique = Array.from(new Set(departments));
      return unique;
    },
  });

  const { data: userGender } = useQuery(["get-genders"], fetchUsers, {
    select: (data) => {
      const gender = data.data.map((user) => user.gender);
      const unique = Array.from(new Set(gender));
      return unique;
    },
  });

  if (isLoading) {
    return (
      <Flexbox>
        <Spinner fontSize="24" />
      </Flexbox>
    );
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <Flexbox>
        <div style={{ alignSelf: "center" }}> Filters </div>
        <Dropdown onChange={(e) => setGender(e.target.value)} value={gender}>
          <option value="" disabled selected>
            Gender
          </option>
          {userGender?.map((gender) => {
            return <option value={gender}>{gender}</option>;
          })}
          <option value="" selected>
            No Filter
          </option>
        </Dropdown>
        <Dropdown
          onChange={(e) => setDepartment(e.target.value)}
          value={department}
        >
          <option value="" disabled selected>
            Department
          </option>
          {userDept?.map((dept) => {
            return <option value={dept}>{dept}</option>;
          })}
          <option value="" selected>
            No Filter
          </option>
        </Dropdown>
      </Flexbox>
      <HeadingWrapper>
        <p>Name</p>
        <p>Last Name</p>
        <p>Gender</p>
        <p>Company</p>
        <p>Department</p>
      </HeadingWrapper>
      {data.map((user) => {
        return (
          <Wrapper key={user.id}>
            <p> {user.first_name} </p> <p>{user.last_name}</p>
            <p>{user.gender}</p> <p>{user.company}</p> <p>{user.department}</p>
          </Wrapper>
        );
      })}
    </>
  );
};
