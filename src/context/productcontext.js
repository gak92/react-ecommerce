import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({children}) => {
  const getProducst = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    console.log(products);
  };

  useEffect(() => {
    getProducst(API);
  }, []);

  return (
    <AppContext.Provider value={{myStoreName: "My Ecommerce Store2"}}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
