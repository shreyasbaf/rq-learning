import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { BASE_URL } from '../constants';

const fetchSuperHeroes = () => {
    return axios.get(BASE_URL+"superheroes");
  };

const addSuperHero = (hero) => {
  return axios.post(BASE_URL+'superheroes', hero)
}
export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(
        "super-heroes",
        fetchSuperHeroes,
        {
          onSuccess,
          onError,
        }
      );
}

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero)
}