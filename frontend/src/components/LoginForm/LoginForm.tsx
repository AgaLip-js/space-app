import React from "react";
import { Formik } from "formik";
import Input from "../atoms/Input";
// import Button from "../atoms/Button";
import styled from "styled-components";
import { login } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { LoginFormTitle, MyFormValues } from "../../interfaces/loginInterface";
import Button from "../atoms/Button";
import { ButtonEnums } from "../../enums/atomEnums";

const StyledForm = styled.form`
  position: relative;
  background: ${({ theme }) => theme.goldBackground};
  width: 500px;
  box-shadow: 0 0 30px rgba(black, 0.1);
  box-sizing: border-box;
  padding: 20px 40px;
  overflow: hidden;
`;

const StyledFormControl = styled.div`
  margin: 20px 0;
`;

const LoginForm: React.FC = ()=> {
  const dispatch = useDispatch();

  const initialValues: MyFormValues = { email: '', password:'' };
  return (
    <Formik
     initialValues={initialValues}
      onSubmit={(values: MyFormValues, { setSubmitting }: any) => {
        const user = {
          email: values.email,
          password: values.password,
        };

        dispatch(login(user));
        setSubmitting(false);
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
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              title="Email"
              placeholder="Enter the email"
            />
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              title="Password"
              placeholder="Enter the password"
            />
          </StyledFormControl>
          <Button type={ButtonEnums.submit} disabled={isSubmitting}>
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;