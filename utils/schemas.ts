import * as yup from "yup"; 

export const loginFormSchema = yup.object({
    email: yup.string().email("Некорректный email").required("Необходимое поле"),
    password: yup.string().required("Необходимое поле"),
  }).required();

  export const registerFormSchema = yup.object({
    fullname: yup.string().required("Необходимое поле")
  }).concat(loginFormSchema).required();