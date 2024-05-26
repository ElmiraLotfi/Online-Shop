//context
import {useCart} from "../context/CartContext";

//components
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

//styles
import styles from "./CheckoutPage.module.css";

//image
import images from "../image/images.png";


function CheckoutPage() {
  const [state,dispatch]= useCart();

  const clickHandeler = (type,payload) => dispatch({type,payload});
  
  if(!state.itemsCounter){
    return(
      <div className={styles.Empty}>
        <img src={images} alt="image"/>
        <p>Your shopping cart is empty!</p>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandeler={clickHandeler}/>
      <div className={styles.products}>
        {state.selectedItems.map((product)=>
          <BasketCard 
          key={product.id} 
          data={product} 
          clickHandeler={clickHandeler}
          />
          )}
      </div>
    </div>
  )
}

export default CheckoutPage