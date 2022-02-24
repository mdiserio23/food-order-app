import Button from "../UI/Button";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  return (
    <form>
      <Input
        label="Amount"
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
