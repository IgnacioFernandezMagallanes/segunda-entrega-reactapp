import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([])

  

  useEffect(() => {
    axios("data.json").then((res) => {
      setData(res.data)
      setProducts(res.data)
    })
  }, []);

  const filterProducts = (filterType) => {

    if(filterType !== "Todos" ){
      setProducts(data.filter(product => product.type === filterType ))
    } else {
      setProducts(data)
    }
    
  }



  const buyProducts = (product) => {
    const productrepeat = cart.find((item) => item.id === product.id)

    if(productrepeat){
      setCart(cart.map((item)=> item.id === product.id ? {...product, quanty: productrepeat.quanty + 1} : item))
    }else{
      setCart([...cart,product])
    }    
  }

  return ( 
    <dataContext.Provider value={{ data, products, cart, filterProducts, setCart, buyProducts }}>{children}</dataContext.Provider>
  );
};

export default DataProvider;
