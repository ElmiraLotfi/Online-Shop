import {Link} from "react-router-dom";
//context
import { useCart } from "../context/CartContext";
//icons
import {PiShoppingCartSimpleBold} from "react-icons/pi";
//styles
import styles from "./layout.module.css";

function Layout({children}) {
    const [state] = useCart();
    
  return (
  <>
  <header className={styles.header}>
    <Link to="/products">BotoShop</Link>
    <Link to="/checkout">
    <div>
        <PiShoppingCartSimpleBold/>
        {!! state.itemsCounter && <span>{state.itemsCounter}</span> }
    </div>
    </Link>
  </header>
  {children}
  <footer className={styles.footer}>
    <p>devlop by Elmira ❤</p>
  </footer>
  </>
  )
}

export default Layout