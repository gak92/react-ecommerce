import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
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
