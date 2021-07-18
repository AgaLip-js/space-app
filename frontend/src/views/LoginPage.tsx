import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import LoginForm from '../components/LoginForm/LoginForm';
import { AuthStore } from '../interfaces/authInterface';
import FirstPageTemplate from '../templates/FirstPageTemplate';


interface IPage {
    name: string
}

const LoginPage: React.FC<IPage> = props => {
    const {isAuthenticated} = useSelector(({ auth }: AuthStore) => ({
        isAuthenticated: auth.isAuthenticated,
      }));

    const history = useHistory();

    if (isAuthenticated) {
        history.push('/');
    }

    return (
        <FirstPageTemplate>
            <LoginForm/>
        </FirstPageTemplate>
    )
};

export default LoginPage;
