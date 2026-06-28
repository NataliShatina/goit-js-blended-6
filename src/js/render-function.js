import { refs } from './refs';

export const renderCategories = data => {
  const marcup = data
    .map(
      el => `<li class="categories__item">
   <button class="categories__btn" type="button">${el}</button>
 </li>
`
    )
    .join('');
  refs.categories.innerHTML = marcup;
};

export const renderProducts = data => {
  const marcup = data
    .map(
      ({
        title,
        brand,
        category,
        price,
        id,
        thumbnail,
      }) => `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${brand}</p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: $${price}</p>
 </li>
`
    )
    .join('');
  refs.products.insertAdjacentHTML('beforeend', marcup);
};

export const clearProducts = () => {
  refs.products.innerHTML = '';
};
