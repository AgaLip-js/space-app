import { Action } from 'redux';

export interface ResponseSuccess {
    data: string;
}

export interface ResponseError {
    response: {
        data: string;
        status: string;
    };
}

export interface AuthToken {
    auth: {token : string};
}

export interface UserState {
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    user: any;
}

export interface AuthStore {
    auth: UserState;
  }

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserAction {
    type: 'USER_LOADED' | 'USER_LOADING' |
    'AUTH_ERROR' |
    'LOGIN_SUCCESS' |
    'LOGIN_FAIL' |
    'LOGOUT_SUCCESS' |
    'REGISTER_SUCCESS' |
    'REGISTER_FAIL' |
    'SET_CURRENT_USER';
    payload?: any;
}

// logout  action type
export interface LogoutAction extends Action {
    type: string;
    payload?: any;
}
