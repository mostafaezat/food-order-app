import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>Your Cart</span>
      <span className={classes.badge}>{numberOfCart}</span>
    </button>
  );
}
