import CalendarPage from "~/views/CalendarPage";
import NotificationsPage from "~/views/NotificationsPage";
import Constants from "../constants/constants";
import LoginPage from "../views/LoginPage";
import MainPage from "../views/MainPage";
import MessagePage from "../views/MessagePage";
import ProfilePage from "../views/ProfilePage";
import RegisterPage from "../views/RegisterPage";

export interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    private: boolean;
    props?: any;
}

const routes: IRoute[] = [
  {
    path: Constants.ROUTE__LOGIN,
    name: 'Login Page',
    component: LoginPage,
    exact: true,
    private: false,
  },
  {
    path: Constants.ROUTE__REGISTER,
    name: 'Register Page',
    component: RegisterPage,
    exact: true,
    private: false,
  },
  {
    path: Constants.ROUTE__MAIN,
    name: 'Main Page',
    component: MainPage,
    exact: true,
    private: true,
  },
  {
    path: Constants.ROUTE__PROFILE,
    name: 'Profile Page',
    component: ProfilePage,
    exact: true,
    private: true,
  },
  {
    path: Constants.ROUTE__MESSAGES,
    name: 'Messages Page',
    component: MessagePage,
    exact: true,
    private: true,
  },
  {
    path: Constants.ROUTE__PRIVATE__CALENDAR,
    name: 'Calendar',
    component: CalendarPage,
    exact: true,
    private: true,
  },
  {
    path: Constants.ROUTE__PRIVATE__NOTIFICATIONS,
    name: 'Notifications',
    component: NotificationsPage,
    exact: true,
    private: true,
  },

];

export default routes;
