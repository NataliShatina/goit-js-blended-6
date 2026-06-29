import"./assets/styles-JE8YjOlG.js";import{a as r}from"./assets/vendor-N5iQpiFS.js";const _="https://dummyjson.com",n={categories:"/products/category-list",pages:"/products",productsByCategory:"/products/category"},i=12;r.defaults.baseURL=_;const y=async()=>(await r.get(n.categories)).data,d=async t=>(await r.get(n.pages,{params:{limit:i,skip:(t-1)*i}})).data,m=async t=>(await r.get(`${n.productsByCategory}/${t}`)).data,o={categories:document.querySelector(".categories"),products:document.querySelector(".products")},b=t=>{const s=t.map(e=>`<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>
`).join("");o.categories.innerHTML=s},l=t=>{const s=t.map(({title:e,brand:c,category:a,price:u,id:p,thumbnail:g})=>`<li class="products__item" data-id="${p}">
    <img class="products__image" src="${g}" alt="${e}"/>
    <p class="products__title">${e}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${c}</p>
    <p class="products__category">Category: ${a}</p>
    <p class="products__price">Price: $${u}</p>
 </li>
`).join("");o.products.insertAdjacentHTML("beforeend",s)},f=()=>{o.products.innerHTML=""},P=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},$=async()=>{try{const t=await y();b(["all",...t]),P()}catch(t){console.log(t)}},C=async()=>{try{const t=await d(1);l(t.products)}catch(t){console.log(t)}},B=async t=>{if(t.target.nodeName!=="BUTTON")return;let s=null;const e=t.target.textContent;try{e==="all"?s=(await d(1)).products:s=(await m(e)).products,f(),l(s);const c=document.querySelector(".categories__btn--active");c&&c.classList.remove("categories__btn--active"),t.target.classList.add("categories__btn--active")}catch(c){console.log(c)}};$();C();o.categories.addEventListener("click",B);
//# sourceMappingURL=index.js.map
