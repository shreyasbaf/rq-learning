import axios from "axios";
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import { BASE_URL } from "../constants";

const fetchUsers = () => {
  return axios.get(BASE_URL + "users");
};

const addUsers = (user) => {
  return axios.post(BASE_URL + "users", user);
};

const deleteUser = (id) => {
  return axios.delete(BASE_URL + `users/${id}`)
}

export const useUsers = () => {
  return useQuery("users", fetchUsers);
};

export const useAddUsers = (onSuccess) => {
  return useMutation(addUsers, { onSuccess });
};

export const useDeleteUser = () =>{
  const qc = new useQueryClient()
  return useMutation(deleteUser, { 
    onSuccess : () => {
      qc.invalidateQueries('users')
      // qc.setQueryData('users', (oldData) =>{
      //   return{
      //     ...oldData,
      //     data: [...oldData.data, data.data],
      //   }
      // })
    }
   })
}