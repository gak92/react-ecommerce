import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/filter_context";
import { CartContextProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
