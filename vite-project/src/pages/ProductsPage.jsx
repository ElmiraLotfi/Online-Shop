import { useProducts } from "../context/ProductContext"
//components
import Card from "../components/Card";
import Loader from "../components/Loader";
//styles
import styles from "./ProductsPage.module.css";


function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
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
  )
}

export default ProductsPage