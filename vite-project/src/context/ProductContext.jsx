import  { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/config';

const ProductsContext = createContext();

function ProductsProvider({children}) {
   const [products,setProducts]=useState([]);

   useEffect(()=>{
   const fetchProducts = async() => {
    try {
      setProducts(await api.get("/products"));
    } catch (error) {
      console.log(error.message);
    }
   }; 
   fetchProducts();
   },[])

  return (
  <ProductsContext.Provider value={products}>
    {children}
  </ProductsContext.Provider>
  );
}
const useProducts =()=>{
    const Products = useContext(ProductsContext);
    return Products;
};

const useProductDetails = (id) =>{
  const Products = useContext(ProductsContext);
  const result = Products.find((product) => product.id === id);
  return result;
};

export default ProductsProvider;
export {useProducts,useProductDetails};