import { useContext } from "react";
import { Mycontext } from "./Usecontext";


export const Home=()=>{
    const{value,setvalue}=useContext(Mycontext);
    return(
        <div>
            <p>{value}</p>
            <button onClick={()=>setvalue("hello,reactcontext!")}>change value</button>
        </div>
    );
};