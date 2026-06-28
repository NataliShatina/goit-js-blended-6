import axios from 'axios';
import { BASE_URL, ENDPOINTS, PER_PAGE } from './constants';

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
  const res = await axios.get(ENDPOINTS.categories);
  return res.data;
};

export const fetchProducts = async page => {
  const res = await axios.get(ENDPOINTS.pages, {
    params: {
      limit: PER_PAGE,
      skip: (page - 1) * PER_PAGE,
    },
  });
  return res.data;
};
