import { useReducer } from "react";

const initialInputState = {
  value: useRef,
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "BLUR") {
    return { ...state, isTouched: true };
  }
  if (action.type === "RESET") {
    return { ...initialInputState };
  }
  return initialInputState;
};
const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const isValid = validate(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const onBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const onReset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    onBlurHandler,
    onReset,
  };
};

export default useInput;
