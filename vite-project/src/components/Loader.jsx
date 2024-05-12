import {RotatingLines} from "react-loader-spinner"

//style
import styles from "./Loader.module.css"

function Loader() {
  return (
    <div className={styles.loader}>
    <RotatingLines 
    width="100px"
    hegiht="100px"
    strokeWidth="3px"
    strokeColor="#fe5d42"
    />
    </div>
  )
}

export default Loader