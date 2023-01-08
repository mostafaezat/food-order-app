import React from "react";
import AvailbeMeals from "./AvailbeMeals";
import MealsSummary from "./MealsSummary";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <>
      <MealsSummary />
      <AvailbeMeals />
    </>
  );
}
