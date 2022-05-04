import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import LoginForm from '../components/LoginForm/LoginForm';
import { AuthStore } from '../interfaces/authInterface';
import { IPage } from '../interfaces/routesInterface';
import FirstPageTemplate from '../templates/FirstPageTemplate';

const LoginPage = () => {
  const history = useHistory();

  const { isAuthenticated } = useSelector(({ auth }: AuthStore) => ({
    isAuthenticated: auth.isAuthenticated,
  }));

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated])

  return (
    <FirstPageTemplate>
      <LoginForm />
    </FirstPageTemplate>
  );
};

export default LoginPage;
