import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  const inputContainerClass = props.classes + ' ' + classes.input
  return (
    <div className={inputContainerClass}>
        <label htmlFor={props.input.id} className={classes.label}>{props.label}</label>
      <input ref={ref} {...props.input}/>
    </div>
  );
});

export default Input;
