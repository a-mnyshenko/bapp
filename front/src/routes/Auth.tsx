import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const AuthRoute = ({ children }: any) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user.token) {
        return children
    } else {
    //    return navigate('/balance')
    }
}