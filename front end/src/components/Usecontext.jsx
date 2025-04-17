import {createContext} from "react";
import { useState } from "react";

export const Mycontext=createContext();
export const Myprovider=({children})=>{
    const[value,setvalue]=useState("hello,world");
    return(
        <Mycontext.Provider value={{value,setvalue}}>
            {children}
        </Mycontext.Provider>
    );
};