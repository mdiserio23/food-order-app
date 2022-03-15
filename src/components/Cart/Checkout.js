import { useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const yourName = useRef();
  const street = useRef();
  const postalCode = useRef();
  const city = useRef();

  const onCheckoutHandler = (event) => {
    event.preventDefault();
    const checkoutData = {
      yourName: yourName.current.value,
      street: street.current.value,
      postalCode: postalCode.current.value,
      city: city.current.value,
    };
    props.onOrder(checkoutData);
  };

  return (
    <>
      <form className={classes["form-control"]} onSubmit={onCheckoutHandler}>
        <Input
          classes={classes.control}
          label="Your Name"
          ref={yourName}
          input={{
            id: "yourName",
            type: "text",
          }}
        ></Input>
        <Input
          classes={classes.control}
          label="Street"
          ref={street}
          input={{
            id: "street",
            type: "text",
          }}
        ></Input>
        <Input
          classes={classes.control}
          label="Postal Code"
          ref={postalCode}
          input={{
            id: "postalCode",
            type: "text",
          }}
        ></Input>
        <Input
          classes={classes.control}
          label="City"
          ref={city}
          input={{
            id: "city",
            type: "text",
          }}
        ></Input>
        <div className={classes["checkout-cta"]}>
          <Button type="button" onClick={props.onCancelCheckoutForm}>
            Cancel
          </Button>
          <Button type="submit">Confirm</Button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
