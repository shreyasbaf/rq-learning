import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { BASE_URL } from "../constants";

const fetchUsers = () => {
  return axios.get(BASE_URL + "users");
};

const addUsers = (user) => {
  return axios.post(BASE_URL + "users", user);
};
export const useUsers = (onSuccess, onError) => {
  return useQuery("users", fetchUsers);
};

export const useAddUsers = (onSuccess) => {
  return useMutation(addUsers, { onSuccess });
};
