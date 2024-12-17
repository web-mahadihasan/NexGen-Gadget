

// Get Product from local storage 
const getProductFromLs = (key) => {
  const allP = localStorage.getItem(key)
  if(allP){
    const products = JSON.parse(allP)
    return products;
  } else{
    return []
  }
}

// Add Product to local storage 
const setProductToLs = (key, product) => {
  const products = getProductFromLs(key)
    products.push(product)
    localStorage.setItem(key, JSON.stringify(products))
}

// Remove Product to local storage
const removeProduct = (key, id) => {
  const products = getProductFromLs(key)
  const remainingProduct = products.filter(prevP => prevP.product_id !== id)
  localStorage.setItem(key, JSON.stringify(remainingProduct));
}

export { getProductFromLs, setProductToLs, removeProduct };



