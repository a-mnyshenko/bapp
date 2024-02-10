// import React, { createContext, useContext, useReducer } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import WellcomePage from "./page/wellcome-page";
// type State = {
//   count: number;
// };

// type Action = {
//   type: ACTION_TYPE;
// };

// enum ACTION_TYPE {
//   LOGIN = "LOGIN",
//   LOGOUT = "LOGOUT",
// }

// // Початковий стан
// type InitialState = {
//   token: null;
//   user: null;
// };

// // Редуктор
// function authReducer(state: any, action: any) {
//   switch (action.type) {
//     case ACTION_TYPE.LOGIN:
//       return {
//         ...state,
//         token: action.payload.token,
//         user: action.payload.user,
//       };
//     case ACTION_TYPE.LOGOUT:
//       return {
//         ...state,
//         token: null,
//         user: null,
//       };
//     default:
//       return state;
//   }
// }

// export const AuthContext = createContext(null);

function App() {
  return <WellcomePage />;
  // const initialState = (InitialState = { token: null, user: null });

  // const [state, dispatch] = useReducer(authReducer, initialState);

  // return (
  //   <AuthContext.Provider value={authContextData}>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route
  //           index
  //           element={
  //             <AuthRoute>
  //               <WellcomePage />
  //             </AuthRoute>
  //           }
  //         />
  //         <Route
  //           path="/signup"
  //           element={
  //             <AuthRoute>
  //               <SignupPage />
  //             </AuthRoute>
  //           }
  //         />
  //         <Route
  //           path="/signup-confirm"
  //           element={
  //             <PrivateRoute>
  //               <SignupConfirmPage />
  //             </PrivateRoute>
  //           }
  //         />
  //         <Route
  //           path="/signin"
  //           element={
  //             <AuthRoute>
  //               <SigninPage />
  //             </AuthRoute>
  //           }
  //         />
  //         <Route
  //           path="/recovery"
  //           element={
  //             <AuthRoute>
  //               <RecoveryPage />
  //             </AuthRoute>
  //           }
  //         />
  //         <Route
  //           path="/recovery-confirm"
  //           element={
  //             <AuthRoute>
  //               <RecoveryConfirmPage />
  //             </AuthRoute>
  //           }
  //         />
  //         <Route
  //           path="/balance"
  //           element={
  //             <PrivateRoute>
  //               <BalancePage />
  //             </PrivateRoute>
  //           }
  //         />
  //         <Route
  //           path="/notifications"
  //           element={
  //             <PrivateRoute>
  //               <NotificationsPage />
  //             </PrivateRoute>
  //           }
  //         />
  //         <Route
  //           path="/settings"
  //           element={
  //             <PrivateRoute>
  //               <SettingsPage />
  //             </PrivateRoute>
  //           }
  //         />
  //         <Route
  //           path="/recive"
  //           element={
  //             <PrivateRoute>
  //               <RecivePage />
  //             </PrivateRoute>
  //           }
  //         />
  //         <Route
  //           path="/send"
  //           element={
  //             <PrivateRoute>
  //               <SendPage />
  //             </PrivateRoute>
  //           }
  //         />
  //         <Route
  //           path="/transaction/:transactionId"
  //           element={
  //             <PrivateRoute>
  //               <TransactionPage />
  //             </PrivateRoute>
  //           }
  //         />
  //         <Route path="*" Component={Error} />
  //       </Routes>
  //     </BrowserRouter>
  //   </AuthContext.Provider>
  // );
}

export default App;
