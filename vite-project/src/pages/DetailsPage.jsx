import {Link, useParams} from "react-router-dom";
//context
import { useProductDetails } from "../context/ProductContext";
//component
import Loader from "../components/Loader";
//styles
import styles from "./DetailsPage.module.css";
//icons
import {SiOpenproject} from "react-icons/si";
import {IoMdPricetag} from "react-icons/io";
import{FaArrowLeft} from "react-icons/fa";

function DetailsPage() {
  const {id} = useParams();
  const productDetails = useProductDetails(+id);
 
  if(!productDetails) return <Loader/>
  return (
    <div className={styles.container}>
      <img  src={productDetails.image} alt={productDetails.title}/>
      <div className={styles.information}>
      <h3>{productDetails.title}</h3>
      <p className={styles.description}>{productDetails.description}</p>
      <p className={styles.category}>
        <SiOpenproject/>
        {productDetails.category}
        </p>
      <div>
        <span className={styles.price}>
          <IoMdPricetag/>
          {productDetails.price}$
          </span>
        <Link to="/products">
          <FaArrowLeft/>
          <span>Back to Shop</span>
          </Link>
      </div>
      </div>
    </div>
  )
}

export default DetailsPage