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

  if(action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((acc, currElem) => {
      let {amount} = currElem;
      acc = acc + amount;
      return acc;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    }
  }

  if(action.type === "INCREASE_QUANTITY") {
    let updatedProduct = state.cart.map((currElem) => {
      if(currElem.id === action.payload) {
        let incAmount = currElem.amount + 1;

        if(incAmount >= currElem.max) {
          incAmount = currElem.max;
        }

        return {
          ...currElem,
          amount: incAmount,
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

  if(action.type == "DECREASE_QUANTITY") {
    let updatedProduct = state.cart.map((currElem) => {
      if(currElem.id === action.payload) {
        let decAmount = currElem.amount - 1;

        if(decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...currElem,
          amount: decAmount,
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

  return state;
};

export default cartReducer;