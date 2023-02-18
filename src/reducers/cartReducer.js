const cartReducer = (state, action) => {
  if(action.type === "ADD_TO_CART") {
    let {id, color, amount, product} = action.payload;

    // find if product exist already
    let existingProduct = state.cart.find((currElem) => currElem.id === id+color);

    if(existingProduct) {
      let updatedProduct = state.cart.map((currElem) => {
        if(currElem.id === id+color) {
          let newAmount =   currElem.amount + amount;
          if(newAmount >= currElem.max) {
            newAmount = currElem.max;
          }
          return {
            ...currElem,
            amount: newAmount,
          };
        }
        else {
          return currElem;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };
    }
    else {
      let cartProduct;
      cartProduct = {
        id: id+color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      }

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }    
  }

  if(action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((currElem) => currElem.id !== action.payload);

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if(action.type === "CLEAR_CART") {

    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default cartReducer;