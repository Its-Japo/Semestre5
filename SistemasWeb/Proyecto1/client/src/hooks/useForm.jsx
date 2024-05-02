import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (callback) => async (event) => {
    event.preventDefault();
    await callback(); // Modificado para manejar funciones asíncronas
  };

  return { values, handleChange, handleSubmit };
}

export default useForm;