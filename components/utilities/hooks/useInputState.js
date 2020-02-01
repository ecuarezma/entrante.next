import { useState } from "react";

export default initialVal => {
  const [value, setValue] = useState(initialVal);
  const [hideForm, setHideForm] = useState(false);
  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    setValue(" ");
    setHideForm(true);
  };
  return [value, handleChange, handleSubmit, hideForm];
};
