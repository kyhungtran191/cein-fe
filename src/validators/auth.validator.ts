import * as yup from 'yup'
export const loginSchema = yup
  .object({
    email: yup.string().email('Your provided email is invald').required('Please provide your email'),
    password: yup.string().required('Please provide password').min(8, 'Password must be at least 8 characters')
  })
  .required()
//SignUp
export const signUpSchema = yup
  .object({
    fullName: yup.string().required('Please provide your name'),
    email: yup.string().email('Your provided email is invald').required('Please provide your email'),
    password: yup.string().required('Please provide password').min(8, 'Password must be at least 8 characters'),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords is not match')
      .required('Please provide confirm password')
  })
  .required()
