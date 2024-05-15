import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
//context
import { useProducts } from "../context/ProductContext"
//components
import Card from "../components/Card";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
//styles
import styles from "./ProductsPage.module.css";
//helper
import {filterProducts, getIntaialQuery, searchProducts } from "../helper/helper";

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

  return (
    <>
    <Search search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className={styles.container}>
    <div className={styles.products}>
      {!displayed.length && <Loader/>}
      {
        displayed.map ((p) =>(
          <Card key={p.id} data={p}/>
        ))}
    </div>
    <Sidebar setQuery={setQuery} query={query}/>
    </div>
    </>
  )
}

export default ProductsPage