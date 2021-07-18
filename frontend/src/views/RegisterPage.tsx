import React from 'react'
import RegisterForm from '../components/RegisterForm/RegisterForm';
import FirstPageTemplate from '../templates/FirstPageTemplate';

interface IPage {
    name: string
}

const RegisterPage: React.FC<IPage> = props => {
    return (
        <FirstPageTemplate>
        <RegisterForm/>
    </FirstPageTemplate>
    )
};

export default RegisterPage;
