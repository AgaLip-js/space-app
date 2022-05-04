import React from 'react';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { IPage } from '../interfaces/routesInterface';
import FirstPageTemplate from '../templates/FirstPageTemplate';

const RegisterPage: React.FC<IPage> = props => (
  <FirstPageTemplate>
    <RegisterForm />
  </FirstPageTemplate>
);

export default RegisterPage;
