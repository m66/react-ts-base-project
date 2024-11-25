import { useState } from "react";

function useFormInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}

export default useFormInput;
