import { useProducts } from "../context/ProductContext"

function ProductsPage() {
  const product = useProducts();
  console.log(product);
  return (
    <div>ProductsPage</div>
  )
}

export default ProductsPage