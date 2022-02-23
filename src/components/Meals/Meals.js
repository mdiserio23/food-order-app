import {MealsProvider} from "../../store/meals-context";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <MealsProvider>
      <MealsSummary />
      <AvailableMeals />
    </MealsProvider>
  );
};

export default Meals;
