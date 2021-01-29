import React from 'react'
import "./Login.css";
import {auth, provider} from "./firebase";
import {useDispatch} from "react-redux";
import {login} from "./features/userSlice.js";

export default function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({user}) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }));

            })
            .catch((error) => (alert(error.message)))
    }
    return (
        <div className={"login"}>
            <div className="login__container">
                <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" alt="login"/>
                <button
                    variant={"contained"}
                    color="primary"
                    onClick={signIn}>Login</button>
            </div>
        </div>
    )
}

// export default Login;