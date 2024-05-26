//image
import image from "../image/error.png";
//style
import styles from "./404.module.css";

function PageNotFound() {
  
  return (
    <div className={styles.container}>
      <img src={image} alt="404"/>
      <p>page not found</p>
    </div>
  )
}

export default PageNotFound