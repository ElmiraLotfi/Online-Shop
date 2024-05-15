import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
//context
import { useProducts } from "../context/ProductContext"
//components
import Card from "../components/Card";
import Loader from "../components/Loader";
//styles
import styles from "./ProductsPage.module.css";
//icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
//helper
import { createQueryObject, filterProducts, getIntaialQuery, searchProducts } from "../helper/helper";

function ProductsPage() {
  const products = useProducts();

  const [displayed,setDisplayed]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState({});
  const [serchParams,setSearchParams]=useSearchParams();

  useEffect(()=> {
    setDisplayed(products);
    setQuery(getIntaialQuery(serchParams));
  },[products]);

  useEffect(()=>{ 
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products,query.search);
    finalProducts = filterProducts(finalProducts,query.category);
    setDisplayed(finalProducts);
  },[query]);

  const searchHandeler = ()=>{
   setQuery((query)=> createQueryObject(query,{search}));
  };

  const categoryHandeler = (event) => {
    const {tagName} = event.target;
    const  category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject (query,{category}));
  };
  
  return (
    <>
    <div>
    <input 
    type="text" 
    placeholder="search..."
    value={search}
    onChange={e=>setSearch(e.target.value.toLowerCase().trim())}
    />
    <button onClick={searchHandeler}><ImSearch /></button>
    </div>
    <div className={styles.container}>
    <div className={styles.products}>
      {!displayed.length && <Loader/>}
      {
        displayed.map ((p) =>(
          <Card key={p.id} data={p}/>
        ))}
    </div>
    <div>
      <div>
      <FaListUl />
      <p>Categories</p>
      </div>
      <ul onClick={categoryHandeler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's clothing</li>
        <li>Women's clothing</li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default ProductsPage