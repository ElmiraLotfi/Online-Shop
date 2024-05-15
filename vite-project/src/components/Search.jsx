//function helper
import { createQueryObject } from "../helper/helper";
//icons
import { ImSearch } from "react-icons/im";
//styles
import styles from "./Search.module.css"


function Search({search,setSearch,setQuery}) {
    const searchHandeler = ()=>{
        setQuery((query)=> createQueryObject(query,{search}));
       };

  return (
    <div className={styles.search}>
    <input 
    type="text" 
    placeholder="search..."
    value={search}
    onChange={e=>setSearch(e.target.value.toLowerCase().trim())}
    />
    <button onClick={searchHandeler}><ImSearch /></button>
    </div>
  )
}

export default Search