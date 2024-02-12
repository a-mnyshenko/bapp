import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { SignIn } from "../../services/api";

export const SignInPage = () => {
    const {user, dispatch} = useContext(AuthContext);
    const [userState, setUserState] = useState(user);

    useEffect(() => {
        if (user.user && user.password) {
            const getUser = async () => {
                const loggedIn = await SignIn(user.user, user.password);
                console.log(loggedIn)
            }
            getUser()
        }
    }, [user]);

    return (
        <div className="wellcome-page">
            <h1>Signin Page</h1>

            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => setUserState({...userState, user: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setUserState({...userState, password: e.target.value})} />
                </div>
                <button onClick={(event) => {
                    event.preventDefault();
                    dispatch({type: "LOGIN", payload: {password: userState.password, user: userState.user}})
                }}>Signin</button>
            </form>
        </div>
    )
}