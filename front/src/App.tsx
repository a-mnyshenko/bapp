import { BrowserRouter, Route, Routes } from "react-router-dom";
import WellcomePage from "./page/wellcome-page";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthRoute } from "./routes/Auth";
import { SignupPage } from "./page/SignUp/Signup";
import { BalancePage } from "./page/Balance";
import { PrivateRoute } from "./routes/Private";
import { SignInPage } from "./page/SignIn/SignIn";
import { SignupConfirmPage } from "./page/SignupConfirmPage/SignupConfirmPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <AuthRoute>
                <WellcomePage />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignupPage />
              </AuthRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <AuthRoute>
                <SignInPage />
              </AuthRoute>
            }
          />
          <Route
            path="/signup-confirm"
            element={
              <PrivateRoute>
                <SignupConfirmPage />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/recovery"
            element={
              <AuthRoute>
                <RecoveryPage />
              </AuthRoute>
            }
          /> */}
          {/* <Route
            path="/signin"
            element={
              <AuthRoute>
                <SigninPage />
              </AuthRoute>
            }
          />
          <Route
            path="/recovery-confirm"
            element={
              <AuthRoute>
                <RecoveryConfirmPage />
              </AuthRoute>
            }
          />
          <Route
            path="/signup-confirm"
            element={
              <PrivateRoute>
                <SignupConfirmPage />
              </PrivateRoute>
            }
          />
           */}
          <Route
            path="/balance"
            element={
              <PrivateRoute>
                <BalancePage />
              </PrivateRoute>
            }
          />
          {/* 
          <Route
            path="/notifications"
            element={
              <PrivateRoute>
                <NotificationsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/recive"
            element={
              <PrivateRoute>
                <RecivePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/send"
            element={
              <PrivateRoute>
                <SendPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/transaction/:transactionId"
            element={
              <PrivateRoute>
                <TransactionPage />
              </PrivateRoute>
            }
          />
            <Route path="*" component={Error} /> */}
          <Route
            path="*"
            element={
              <AuthRoute>
                <div className="wellcome-page"><h1>404</h1></div>
              </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ AuthProvider>
  );
}

export default App;
