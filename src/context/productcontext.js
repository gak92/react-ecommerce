import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/productReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
}; 

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducst = async (url) => {
    dispatch({type: "SET_LOADING"});
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({type: "SET_API_DATA", payload: products});
    }
    catch(error) {
      dispatch({type: "API_ERROR"});
    }
  };

  useEffect(() => {
    getProducst(API);
  }, []);

  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
