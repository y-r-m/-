import { useState } from "react";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value })); //setValues...이전 값들을 모두 불러옴
  };
  const resetForm = () => {
    setValues(initialValues);
  };
  return { values, handleChange, resetForm };
}
