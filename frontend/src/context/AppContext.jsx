import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsData } from "../assets/assets";

export const AppContext=createContext();

const AppContextProvider=({children})=>{

    const[products,setProducts]=useState([]);
    const[loading,setLoading]=useState(false);
    const[user,setUser]=useState(false);
    const navigate=useNavigate();

    const fetchProducts=async()=>{
        setProducts(productsData)
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    const value={loading,setLoading,user,setUser,navigate,products,setProducts}
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;