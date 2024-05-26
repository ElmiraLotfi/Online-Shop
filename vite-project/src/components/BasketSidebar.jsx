import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

//styles
import styles from "./BasketSidebar.module.css";

function BasketSidebar({state,clickHandeler}) {
  return (
    <div className={styles.sidebar}>
        <div>
        <TbChecklist />
            <p>total:</p>
            <span>{state.total}</span>
        </div>
        <div>
        <FaHashtag />
            <p>ItemsCounter:</p>
            <span>{state.itemsCounter}</span>
        </div>
        <div>
        < BsPatchCheck/>
            <p>Status:</p>
            <span>{!state.checkout && "pending..."}</span>
        </div>
        <button onClick={()=> clickHandeler("CHEKOUT")}>checkout</button>
    </div>
  )
}

export default BasketSidebar

