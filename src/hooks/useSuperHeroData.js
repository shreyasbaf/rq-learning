import axios from 'axios';
import { useQuery } from 'react-query';
import { BASE_URL } from '../constants';

const fetchSuperHero = (heroId) => {
    return axios.get(BASE_URL+`superheroes/${heroId}`);
  };

export const useSuperHeroData = (heroId) =>{
    return useQuery(['super-hero', heroId], () => fetchSuperHero(heroId))
}