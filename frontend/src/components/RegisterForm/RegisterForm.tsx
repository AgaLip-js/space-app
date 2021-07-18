import React from "react";
import { Formik } from "formik";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import styled from "styled-components";
import { register } from "../../redux/actions/authActions";
import { myRegisterFormValues } from "../../interfaces/loginInterface";
import { useDispatch } from "react-redux";

const StyledForm = styled.form`
  position: relative;
  background: ${({ theme }) => theme.whiteBackground};
  width: 500px;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(black, 0.1);
  box-sizing: border-box;
  padding: 20px 40px;
  overflow: hidden;
`;

const StyledFormControl = styled.div`
  margin: 20px 0;
`;
const StyledErrorMsg = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: ${({ theme }) => theme.errorColor};
    height: 1rem;
    margin: 0;
`

const RegisterForm: React.FC = ()=> {
    const dispatch = useDispatch();
    const initialValues: myRegisterFormValues = { login: '', email: '', password:'' };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values: myRegisterFormValues) => {
        const errors = {email: '', login: '', password: ''};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        //   return errors;
        if (!values.login) {
          errors.login = "Required";
        } else if (!/^[A-Z0-9._%+-]{2,}$/i.test(values.login)) {
          errors.login = "Invalid login";
        }
        if (!values.password) {
          errors.password = "Required";
        } else if (!/^[A-Z0-9._%+-]{2,}$/i.test(values.password)) {
          errors.password = "Invalid password";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const newUser = {
            login: values.login,
            email: values.email,
            password: values.password,
          };

          dispatch(register(newUser));
          setSubmitting(false);
        }, 100);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }: any) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormControl>
            <StyledErrorMsg>{touched.login && errors.login ? errors.login : ''}</StyledErrorMsg>
            <Input
              type="text"
              name="login"
              id="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
              title="Login"
              placeholder= 'Enter the login'
              secondary = 'secondary'
            />
            <StyledErrorMsg>{touched.email && errors.email ? errors.email : ''}</StyledErrorMsg>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              title="Email"
              placeholder= 'Enter the email'
              secondary = 'secondary'
            />
            <StyledErrorMsg>{touched.password && errors.password ? errors.password : ''}</StyledErrorMsg>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              title="Password"
              placeholder="Enter the password"
              secondary = 'secondary'
            />
          </StyledFormControl>
          <Button type="submit" disabled={isSubmitting}>
            Zatwiedź
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default RegisterForm;
