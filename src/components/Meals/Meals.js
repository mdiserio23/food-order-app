import { useContext, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import MealsContext from "../../store/meals-context";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import classes  from "./Meals.module.css";

const Meals = (props) => {
  const { mealsList, setMeals } = useContext(MealsContext);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();
  let content = null;

  useEffect(() => {
    fetchMeals(
      {
        url: "https://react-http-2083a-default-rtdb.firebaseio.com/meals.json",
      },
      setMeals
    );
  }, [fetchMeals, setMeals]);

  if (isLoading) {
    content = <p className={classes["is-loading"]}>Loading...</p>;
  }
  if (!isLoading && !error && mealsList) {
    content = <AvailableMeals />;
  }
  if (!isLoading && error) {
    content = <p className={classes["is-error-text"]}>Something went wrong.</p>;
  }

  return (
    <>
      <MealsSummary />
      {content}
    </>
  );
};

export default Meals;
