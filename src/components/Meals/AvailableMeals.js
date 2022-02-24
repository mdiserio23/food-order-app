import { useContext } from "react";
import MealsContext from "../../store/meals-context";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  const mealsCtx = useContext(MealsContext);

  const mealsList = mealsCtx.availableMeals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        description={meal.description}
        price={meal.price}
        name={meal.name}
      ></MealItem>
    );
  });

  return (
    <Card className={classes.meals}>
      <ul>{mealsList}</ul>
    </Card>
  );
};

export default AvailableMeals;
