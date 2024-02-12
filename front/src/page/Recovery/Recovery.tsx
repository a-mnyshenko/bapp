import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const RecoveryPage = () => {
    const {user, dispatch} = useContext(AuthContext);
    const [confirmCode, setConfirmCode] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (user.userConfirm) {
            navigate('/recovery')
        }
    }, [user.userConfirm])

    return (
        <div className="wellcome-page">
            <h1>Confirm Code</h1>

            <form>
                <div>
                    <label htmlFor="email">Confirm Code</label>
                    <input type="confirm-code" id="confirm-code" onChange={(e) => setConfirmCode(e.target.value)} />
                </div>
                <button onClick={(event) => {
                    event.preventDefault();
                    if (user.user && confirmCode.toString() === '1234') {
                        console.log('confirmCode', user, confirmCode)
                        dispatch({type: "LOGIN", payload: {...user, userConfirm: true}})
                    }
                }}>Signin</button>
            </form>
        </div>
    )
}
