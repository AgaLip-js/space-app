import Constants from "../constants/constants";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";

export interface IRoute {
    path: string,
    name: string,
    exact: boolean,
    component: any,
    props?: any,
}

const routes: IRoute[] = [
    {
        path: Constants.ROUTE__LOGIN,
        name: 'Login Page',
        component: LoginPage,
        exact: true,
    },
    {
        path: Constants.ROUTE__REGISTER,
        name: 'Register Page',
        component: RegisterPage,
        exact: true,
    },
]

export default routes;
