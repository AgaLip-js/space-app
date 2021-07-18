import React, { useEffect } from 'react';
import routes from './utils/routes';
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector, Provider } from 'react-redux';
import { loadUser } from './redux/actions/authActions';
import { AuthStore } from './interfaces/authInterface';
import store from './redux/store/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/MainTheme';
import Constants from './constants/constants';


const App: React.FC<{}> = props => {
  const {token, isAuthenticated} = useSelector(({ auth }: AuthStore) => ({
    token: auth.token,
    isAuthenticated: auth.isAuthenticated,
  }));

  console.log(token);
  console.log(isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

    /**
   * Return location for the user, depending on the authentication
   * @returns {string} route path
   */
     const returnLocation = () => {
      // if user is not authenticated, go to login view
      if (!isAuthenticated) {
        return Constants.ROUTE__LOGIN
      }

      // otherwise, dispatch the authentication action and go to the main view
      return Constants.ROUTE__MAIN;
    };

  return (
    <>
    <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            {routes.map((route,index)=> (
              <Route key={index}
              path={route.path}
              exact = {route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                name={route.name}
                {...props}
                {...route.props}
                />
              )}
              />
            ))}
            <Redirect from="*" to={returnLocation()}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default AppWrapper;
