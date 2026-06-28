import { fetchCategories, fetchProducts } from './products-api';
import { renderCategories, renderProducts } from './render-function';
import { activeBtn } from './helpers';
export const getCategories = async () => {
  try {
    const res = await fetchCategories();
    renderCategories(['all', ...res]);
    activeBtn();
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const res = await fetchProducts(1);
    // console.log(res);
    renderProducts(res.products);
  } catch (error) {
    console.log(error);
  }
};
