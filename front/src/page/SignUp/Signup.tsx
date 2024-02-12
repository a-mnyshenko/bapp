import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../../services/api";

export const SignupPage = () => {
    const {user, dispatch} = useContext(AuthContext);
    const [userState, setUserState] = useState(user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.user && user.password) {
            const getUser = async () => {
                const signedIn = await SignUp(user.user, user.password);
                console.log(signedIn)
            }
            getUser()
        }
    })

    useEffect(() => {
        if (user.user) {
            navigate('/signup-confirm')
        }
    }, [user.user])

    return (
        <div className="wellcome-page">
            <h1>SignUp Page</h1>
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
                    dispatch({type: "LOGIN", payload: {user: userState.user, password: userState.password}})
                }}>SignUp</button>
            </form>
        </div>
    )
}