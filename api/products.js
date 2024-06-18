

const URL ="https://fakestoreapi.com" ;


async function getProducts() {
  try{
  const response = await fetch(`${URL}/products`);
  const data = await response.json();
  console.log("inside getProducts, data is", data);
  return data;
  
}catch (e) {
  console.log("error in api call");
 
}
}
export {getProducts};

getProducts()
export default URL;


