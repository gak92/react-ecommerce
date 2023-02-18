import React from 'react';
import { FaTrash } from 'react-icons/fa';
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';


const CartItem = ({id, name, image, color, price, amount }) => {

  const setDecrease = () => {
    // amount > 1 ? setAmount(amount-1) : setAmount(1);
  };

  const setIncrease = () => {
    // amount < stock ? setAmount(amount+1) : setAmount(stock);
  }

  return (
    <div className='cart_heading grid grid-five-column'>

      {/* Items image and text */}
      <div className='cart-image--name'>
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className='color-div'>
            <p>color: </p>
            <div className='color-style' style={{backgroundColor: color, color:color }}>
            </div>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className='cart-hide'>
        <p><FormatPrice price={price} /></p>
      </div>

      {/* Quantity */}
      <CartAmountToggle 
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* Subtotal */}
      <div className='cart-hide'>
        <p><FormatPrice price={price * amount} /></p>
      </div>

      {/* Delete Icon */}
      <div>
        <FaTrash className='remove_icon' />
      </div>

    </div>
  );
};

export default CartItem;