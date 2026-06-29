import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from './products-api';
import {
  clearProducts,
  renderCategories,
  renderProducts,
} from './render-function';
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

export const handleCategoryClick = async event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  let products = null;
  const category = event.target.textContent;
  try {
    if (category === 'all') {
      const allProducts = await fetchProducts(1);
      products = allProducts.products;
    } else {
      const res = await fetchProductsByCategory(category);
      products = res.products;
    }
    clearProducts();
    renderProducts(products);
    const activeBtn = document.querySelector('.categories__btn--active');
    if (activeBtn) {
      activeBtn.classList.remove('categories__btn--active');
    }
    event.target.classList.add('categories__btn--active');
  } catch (error) {
    console.log(error);
  }
};
