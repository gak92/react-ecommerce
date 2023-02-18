import { createContext, useContext, useReducer } from "react";
import reducer from '../reducers/cartReducer';

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};

const CartContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    console.log("PRODUCT in context: ", product);
    dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}});
  };

  return (
    <CartContext.Provider value={{...state, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
}

export { CartContextProvider, useCartContext, CartContext };