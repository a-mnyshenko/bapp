import { createContext, useEffect, useReducer } from "react";
import { ACTION_TYPE, IUser } from "../types";
import { SignIn } from "../services/api";


const initialState: IUser = {
    token: null,
    user: null,
    password: null,
    userConfirm: false,
};

function authReducer(state: any, action: any) {
    switch (action.type) {
      case ACTION_TYPE.LOGIN:
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
          password: action.payload.password,
          userConfirm: action.payload.userConfirm,
        };
      case ACTION_TYPE.LOGOUT:
        return {
          ...state,
          token: null,
          user: null,
          password: null,
          userConfirm: false,
        };
      default:
        return state;
    }
}

export const AuthContext = createContext<Record<IUser | any, any>>(initialState);

export const AuthProvider = ({ children }: any) => {
    const [user, dispatch] = useReducer(authReducer, initialState);

    return (
      <AuthContext.Provider value={{user, dispatch}}>
        {children}
      </AuthContext.Provider>
    );
};

