import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.00,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.00,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.00,
  },
];

const AvailableMeals = (props) => {

  const mealsList = DUMMY_MEALS.map((meal) => {
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
