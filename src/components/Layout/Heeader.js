import React from "react";
import classes from "./Header.module.css";
import MainImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";


export default function Heeader(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meeals</h1>
        <HeaderCartButton onClick={props.onOpenCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MainImg} alt="main img" />
      </div>
    </>
  );
}
