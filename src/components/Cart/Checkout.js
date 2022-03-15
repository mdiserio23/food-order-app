import { useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./Checkout.module.css";

const inputIsEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    yourName: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const yourName = useRef();
  const street = useRef();
  const postalCode = useRef();
  const city = useRef();

  const onCheckoutHandler = (event) => {
    event.preventDefault();
    const yourNameIsValid = !inputIsEmpty(yourName.current.value);
    const streetIsValid = !inputIsEmpty(yourName.current.value);
    const postalCodeIsValid = !isNotFiveChars(yourName.current.value);
    const cityIsValid = !inputIsEmpty(yourName.current.value);
    const formIsValid =
      yourNameIsValid &&
      streetIsValid &&
      postalCodeIsValid &&
      cityIsValid &&
      cityIsValid;

    setFormValidity({
      yourName: yourNameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    if (!formIsValid) {
      return;
    }

    const checkoutData = {
      yourName: yourName.current.value,
      street: street.current.value,
      postalCode: postalCode.current.value,
      city: city.current.value,
    };
    props.onOrder(checkoutData);
  };

  const yourNameClass = `${classes.control} ${
    formValidity.yourName ? "" : classes.invalid
  }`;
  const streetClass = `${classes.control} ${
    formValidity.street ? "" : classes.invalid
  }`;
  const postalCodeClass = `${classes.control} ${
    formValidity.postalCode ? "" : classes.invalid
  }`;
  const cityClass = `${classes.control} ${
    formValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes["form-control"]} onSubmit={onCheckoutHandler}>
      <Input
        classes={yourNameClass}
        label="Your Name"
        ref={yourName}
        input={{
          id: "yourName",
          type: "text",
        }}
      ></Input>
      {!formValidity.yourName && <p>Name is mandatory.</p>}
      <Input
        classes={streetClass}
        label="Street"
        ref={street}
        input={{
          id: "street",
          type: "text",
        }}
      ></Input>
      {!formValidity.street && <p>Name is mandatory.</p>}
      <Input
        classes={postalCodeClass}
        label="Postal Code"
        ref={postalCode}
        input={{
          id: "postalCode",
          type: "text",
        }}
      ></Input>
      {!formValidity.postalCode && <p>Name is mandatory.</p>}
      <Input
        classes={cityClass}
        label="City"
        ref={city}
        input={{
          id: "city",
          type: "text",
        }}
      ></Input>
      {!formValidity.city && <p>Name is mandatory.</p>}
      <div className={classes["checkout-cta"]}>
        <Button type="button" onClick={props.onCancelCheckoutForm}>
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
};

export default Checkout;
