import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHadnler = id =>{
    cartCtx.removeItem(id)
  }
  const cartItemAddHadnler = item =>{
    cartCtx.addItem({...item , amount : 1 })
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          amount={item.amount}
          name={item.name}
          onRemove={cartItemRemoveHadnler.bind(null ,item.id )}
          onAdd = {cartItemAddHadnler.bind(null ,item )}
        />
      ))}
    </ul>
  );
  const totalprice = `$${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <Modal onClose={props.onmodal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalprice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onmodal}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
