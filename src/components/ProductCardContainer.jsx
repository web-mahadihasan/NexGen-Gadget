import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductCardContainer = () => {
  const { categoryName } = useParams();
  const allProducts = useLoaderData()
  const [categoryProducts, setCategoryProducts] = useState([])
  
  useEffect(()=> {
    if(categoryName){
      if(categoryName === "all-products"){
        setCategoryProducts(allProducts);
      }else{
        const categoryFilter = [...allProducts].filter(product => product.slug === categoryName)
        setCategoryProducts(categoryFilter);
      }
    }else{
      setCategoryProducts(allProducts.slice(0, 9));
    }
  }, [allProducts, categoryName])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {
        categoryProducts.length > 0?categoryProducts?.map(product => <ProductCard key={product.product_id} product={product}/>): <h3 className="text-4xl font-bold text-primary-color my-6 col-span-3">No Products are available this category</h3>
      }
    </div>
  );
};

export default ProductCardContainer;