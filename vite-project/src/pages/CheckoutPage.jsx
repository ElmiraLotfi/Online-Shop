import BasketCard from "../components/BasketCard";
import {useCart} from "../context/CartContext";

function CheckoutPage() {
  const [state,dispatch]= useCart();

  const clickHandeler = (type,payload) => dispatch({type,payload});
  
  return (
    <div>
      <div>
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