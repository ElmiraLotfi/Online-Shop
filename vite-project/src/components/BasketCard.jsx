//helper
import { shortenText } from "../helper/helper";
//icons
import { MdDeleteOutline } from "react-icons/md";
//styles
import styles from "./BasketCard.module.css";

function BasketCard({data,clickHandeler}) {
  const {title,image,quantity,price}=data;
  return (
  <div className={styles.card}>
    <img src={image} alt={title}/>
    <p>{shortenText(title)}</p>
    <p className={styles.price}>{price} $</p>
    <div className={styles.actions}>
     {quantity=== 1 && (
      <button onClick={() => clickHandeler("REMOVE_ITEM",data)}>
        <MdDeleteOutline/>
      </button>
     )}
     { quantity>1 && (<button onClick={() => clickHandeler("DECREASE",data)}>-</button>)}
     <span>{quantity}</span>
     <button onClick={() => clickHandeler("INCREASE",data)}>+</button>
    </div>
  </div>
  );
}

export default BasketCard