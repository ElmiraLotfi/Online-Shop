import {Link} from "react-router-dom"
//styles
import styles from "./Card.module.css";
//helper
import { productQuantity, shortenText } from "../helper/helper"
//icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
//context
import { useCart } from "../context/CartContext";

function Card({data}) {
  const {id,title,image,price}=data;

  const [state,disptch] =  useCart();

  const quantity = productQuantity (state,id);
  
  const clickHandeler = (type) =>{
    disptch({type,payload:data});
  };

  return (
    <div className={styles.card}>
    <img src={image} alt={title}/>
    <h3>{shortenText(title)}</h3>
    <p>{price} $</p>
    <div className={styles.actions}>
        <Link to={`products${id}`}>
        <TbListDetails />
        </Link>
       <div>
      {quantity === 1 && ( 
        <button onClick= {() => clickHandeler("REMOVE_ITEM")}>
          <MdDeleteOutline /></button>
        )}
      {quantity > 1 && (  
        <button onClick= {() => clickHandeler("DECREASE")}>-</button>
      )}
      {!!quantity && <span>{quantity}</span>}
      { quantity === 0 ? (
        <button onClick= {() => clickHandeler("ADD_ITEM")}>
          <TbShoppingBagCheck />
          </button>
          ):(
          <button onClick= {() => clickHandeler("INCREASE")}>+</button>
      )}
    </div>
    </div>
    </div>
  )
}

export default Card