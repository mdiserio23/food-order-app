import { useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const amountRef = useRef();

  const onAddItemHandler = event => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAddItem(enteredAmountNumber);
  }

  return (
    <form onSubmit={onAddItemHandler}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          id: "formAmount" + props.id,
        }}
      />
      <Button type="submit">+ Add</Button>
    </form>
  );
};

export default MealItemForm;
