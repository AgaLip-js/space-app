export interface ResponseSuccess {
    data: string,
}

export interface ResponseError {
    response: {
        data: string,
        status: string,
    }
}

export interface AuthToken {
    auth: {token : string}
}

export interface UserState {
    token: string | null,
    isAuthenticated: boolean,
    isLoading: boolean,
    user: object,
}

export interface AuthStore {
    auth: UserState
  }

  export interface UserLogin {
    email: string,
    password: string
  }
