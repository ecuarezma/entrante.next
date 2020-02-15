import React from "react";
import useInputState from "../utilities/hooks/useInputState";
import classes from "./Form.module.css";

const Form = () => {
  const [value, handleChange, handleSubmit, hideForm] = useInputState(" ");
  let form = hideForm ? (
    <p>Thank you for joining!</p>
  ) : (
    <form onSubmit={handleSubmit} className={classes.Form}>
      <label>Newsletter</label>
      <input
        type="email"
        title="email"
        placeholder="your email"
        onChange={handleChange}
        value={value}
      />
      <button>Subscribe</button>
    </form>
  );
  return form;
};
export default Form;
