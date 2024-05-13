import { useState } from "react";
//context
import { useProducts } from "../context/ProductContext"
//components
import Card from "../components/Card";
import Loader from "../components/Loader";
//styles
import styles from "./ProductsPage.module.css";
//icons
import { ImSearch } from "react-icons/im";

function ProductsPage() {
  const products = useProducts();
  console.log(products);

  const [search,setSearch]=useState("");

  const searchHandeler = ()=>{
    console.log(search);
  }
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
      {!products.length && <Loader/>}
      {
        products.map ((product) =>(
          <Card key={product.id} data={product}/>
        ))}
    </div>
    <div>sidebar</div>
    </div>
    </>
  )
}

export default ProductsPage