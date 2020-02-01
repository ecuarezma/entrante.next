import React from "react";
import useInputState from "../utilities/hooks/useInputState";

const Form = () => {
  const [value, handleChange, handleSubmit, hideForm] = useInputState(" ");
  let form = hideForm ? (
    <p>Thank you for joining!</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        title="email"
        placeholder="enter your email"
        onChange={handleChange}
        value={value}
      />
      <button>Submit</button>
    </form>
  );
  return form;
};
export default Form;
