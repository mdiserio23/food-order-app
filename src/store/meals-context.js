import React from "react";

const MealsContext = React.createContext({
    mealsList: [],
    setMeals: () => {}
});

export default MealsContext;