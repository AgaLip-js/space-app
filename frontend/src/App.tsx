import React, { useEffect } from 'react';
import { BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
  Redirect } from "react-router-dom";
import { useDispatch, useSelector, Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import routes from './utils/routes';
import { loadUser } from './redux/actions/authActions';
import { AuthStore } from './interfaces/authInterface';
import store from './redux/store/store';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/MainTheme';
import Constants from './constants/constants';
import PrivateRoute from './templates/PrivateRoute';

const App = () => {
  const { isAuthenticated } = useSelector(({ auth }: AuthStore) => ({
    isAuthenticated: auth.isAuthenticated,
  }));

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
      return Constants.ROUTE__LOGIN;
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
            {routes.map((route, index) => (
              route.private
                ? (
                  <PrivateRoute
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                    component={route.component}
                  />
                )
                : (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    render={(props: RouteComponentProps<any>) => (
                      <route.component
                        name={route.name}
                        {...props}
                        {...route.props}
                      />
                    )}
                  />
                )
            ))}
          </Switch>
          <Redirect from="*" to={returnLocation()} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default AppWrapper;
