import { useState } from 'react';

export default function useChangeInput({
    initialValues,
  }) {
    const [values, setValues] = useState(initialValues);
  
    function handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      setValues({
        ...values,
        [fieldName]: value,
      });
    }
  
    return {
      values,
      handleChange,
    };
  }