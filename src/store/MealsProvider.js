import { useState, useCallback } from "react";
import MealsContext from "./meals-context";

const MealsProvider = (props) => {
  const [mealsList, setMealsList] = useState([]);

  const setMealsListHandler = useCallback((newMeals) => {
    setMealsList(newMeals);
  },[]);

  const constectToReturn = {
    mealsList,
    setMeals: setMealsListHandler,
  };

  return (
    <MealsContext.Provider value={constectToReturn}>
      {props.children}
    </MealsContext.Provider>
  );
};
export default MealsProvider;
