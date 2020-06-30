import { useState } from 'react';

function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue(initialState);
  };

  const bind = {
    value,
    onChange: (e) => {
      e.preventDefault();
      setValue(e.target.value);
    },
  }

  return [value, bind, reset];
}

export default useInput;