export type State = {
    count: number;
};
  
export type Action = {
    type: ACTION_TYPE;
};

export enum ACTION_TYPE {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
};

export type IUser = {
    token: string | null;
    user: string | null;
    password: string | null;
    userConfirm: boolean;
};
