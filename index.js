import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";const l="https://dummyjson.com",r={categories:"products/category-list",pages:"products"},o=12;e.defaults.baseURL=l;const g=async()=>(await e.get(r.categories)).data,_=async t=>(await e.get(r.pages,{params:{limit:o,skip:(t-1)*o}})).data,a={categories:document.querySelector(".categories"),products:document.querySelector(".products")},m=t=>{const s=t.map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>
`).join("");a.categories.innerHTML=s},y=t=>{const s=t.map(({title:c,brand:n,category:i,price:p,id:d,thumbnail:u})=>`<li class="products__item" data-id="${d}">
    <img class="products__image" src="${u}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${n}</p>
    <p class="products__category">Category: ${i}</p>
    <p class="products__price">Price: $${p}</p>
 </li>
`).join("");a.products.insertAdjacentHTML("beforeend",s)},b=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},$=async()=>{try{const t=await g();m(["all",...t]),b()}catch(t){console.log(t)}},f=async()=>{try{const t=await _(1);y(t.products)}catch(t){console.log(t)}};$();f();
//# sourceMappingURL=index.js.map
