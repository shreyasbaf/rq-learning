import { useState } from "react";
import { useAddUsers } from "../hooks/useUsersData";
import { Button, Input, InputWrapper, Dropdown } from "./Useres.style";

export const HomePage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [company, setCompany] = useState("");
  const [dept, setDept] = useState("");

  const onSuccess = () => {
    alert("User Added");
    setName("");
    setLastName("");
    setEmail("");
    setGender("");
    setCompany("");
    setDept("");
  };

  const { mutate: addUser } = useAddUsers(onSuccess);
  const handleAddUser = () => {
    const user = {
      first_name: name,
      last_name: lastName,
      email,
      gender,
      company,
      department: dept,
    };
    addUser(user);
  };

  return (
    <>
      <InputWrapper>
        <h3 style={{color: '#4f3074CC'}}>Add User</h3>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Dropdown onChange={(e) => setGender(e.target.value)} value={gender}>
          <option value='' disabled selected>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Dropdown>
        <Input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Department"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        />
        <Button
          onClick={handleAddUser}
          disabled={
            name === "" ||
            lastName === "" ||
            email === "" ||
            gender === "" ||
            company === "" ||
            dept === ""
          }
        >
          Add User
        </Button>
      </InputWrapper>
    </>
  );
};
