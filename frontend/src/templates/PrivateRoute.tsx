/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Constants from '../constants/constants';
import { AuthStore } from '../interfaces/authInterface';
import LeftBar from '../components/LeftBar/LeftBar';

interface ComponentState {
    Component: any;
    isAuthenticated: boolean;
    props: any;
}

const StyledView = styled.div`
    display: flex;

`;
/**
 * Function that returns the maximum number of points that can be obtained in the module
 * @param {Object} Component - object with Component to display
 * @param {boolean} isAuthenticated - indicates if the user has a valid token to display the component
 * @param {Object} props - object with other props that are passed by component object
 * @returns {Object} display proper HTML object, depending on the property isAuthenticated
 */
const getComponentByState = ({ Component, isAuthenticated, props }: ComponentState) => {
  if (isAuthenticated) {
    return (
      <StyledView>
        <LeftBar />
        <Component {...props} />
      </StyledView>
    );
  }

  // redirect to login page if user is not authenticated
  return (
    <Redirect to={{
      pathname: Constants.ROUTE__LOGIN,
      state: {
        from: props.location,
      },
    }}
    />
  );
};

interface PrivateRouteProps {
    component: any;
    path: string;
    exact: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  // get state of properties from authReducer
  const { isAuthenticated } = useSelector(({ auth }: AuthStore) => ({
    isAuthenticated: auth.isAuthenticated,
  }));

  return (
    <Route
      {...rest}
      render={props => getComponentByState({
        Component, isAuthenticated, props,
      })}
    />
  );
};

PrivateRoute.propTypes = {
  // object - component to display
  component: PropTypes.instanceOf(Object).isRequired,
};

export default PrivateRoute;
