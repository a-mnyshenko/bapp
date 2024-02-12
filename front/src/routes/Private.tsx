import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }: any) => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        if (!user.userConfirm) {
            navigate('/signup-confirm')
        } else if (!user.token) {
            navigate('/')
        }
    }, [user])

    return user.token ? children : null
}