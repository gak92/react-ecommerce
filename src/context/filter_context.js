import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from '../reducers/flterReducer';

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};

export const FilterContextProvider = ({children}) => {
  const { products } = useProductContext();
  // console.log(products);

  const [state, dispatch] = useReducer(reducer, initialState);
  // Set Grid View
  const setGridView = () => {
    return dispatch({type: 'SET_GRID_VIEW'})
  };

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products})
  }, [products]);
  
  return (
    <FilterContext.Provider value={{...state, setGridView}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
}
