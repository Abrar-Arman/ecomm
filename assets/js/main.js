const getCategory = async () => {
  const { data } = await axios.get(
    "https://dummyjson.com/products/category-list"
  );
  return data;
};
const displayCategory = async () => {
  const data = await getCategory();
  const content = data
    .map((category) => `<div class='category-content'>
    <h3>${category}</h3>
     <a href='category.html?category=${category}'>show details</a>
    </div>`)
    .join("");
  document.querySelector(".category .row").innerHTML = content;
};
displayCategory();
const getProduct=async()=>{
    const {data}=await axios.get('https://dummyjson.com/products');
   return data.products;

    
}
const displayProduct=async ()=>{
    const data=await getProduct();
    const content=data.map((product)=>`<div class='product-content'>
    <img src='${product.thumbnail}' alt='${product.title}'>
    <h3>${product.title}</h3>
   
    </div>`).join('')
    document.querySelector('.product .row').innerHTML=content;
}
displayProduct()
