//function hleper
import { createQueryObject } from "../helper/helper";
//constans
import { catgories } from "../constants/list";
//icon
import { FaListUl } from "react-icons/fa";
//Styles
import styles from "./Sidebar.module.css"



function Sidebar({setQuery,query}) {
    const categoryHandeler = (event) => {
        const {tagName} = event.target;
        const  category = event.target.innerText.toLowerCase();
        if (tagName !== "LI") return;
        setQuery((query) => createQueryObject (query,{category}));
      };
      
  return (
    <div className={styles.sidebar}>
    <div>
    <FaListUl />
    <p>Categories</p>
    </div>
    <ul onClick={categoryHandeler}>
     {
      catgories.map((item)=>(
      <li
       key={item.id}
       className={
        item.type.toLowerCase() === query.category 
        ? styles.selected 
        : null
      }
        >
      {item.type}
      </li>
      ))
     }
    </ul>
  </div>
  )
}

export default Sidebar