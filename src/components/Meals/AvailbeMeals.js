import React from "react";
import Card from "../UI/Card";
import classes from "./AvailabeMeals.module.css";
import MealItem from "../Meals/Mealltem/MealItem";

export default function AvailbeMeals() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  const MealItemList = DUMMY_MEALS.map((Meal) => (
    <MealItem
      id={Meal.id}
      key={Meal.id}
      name={Meal.name}
      description={Meal.description}
      price={Meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealItemList}</ul>
      </Card>
    </section>
  );
}
