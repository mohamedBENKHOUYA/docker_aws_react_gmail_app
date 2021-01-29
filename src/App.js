import React, {useEffect} from 'react';
import Header from './Header.js'
import './App.css';
import Sidebar from './Sidebar.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Mail from "./Mail.js";
import EmailList from './EmailList.js';
import SendMail from "./SendMail";
import {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import {login, selectUser} from "./features/userSlice";
import store from "./app/store";
import Login from "./Login"
import {useDispatch} from "react-redux";
import {auth} from "./firebase";

function App() {
    // store.subscribe(() => console.log("state Changed !", store.getState()));
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                // the user is logged in
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                }))
            }
        })

    }, [])

    return (
        <Router>
            {
                !user ? (<Login />):
                    (
                       <div className={"app"}>

                <Header/>
                <div className="app__body">
                    <Sidebar />
                    <Switch  >
                        <Route path={"/mail"}>
                            <Mail />
                        </Route>
                        <Route exact path={"/"}>
                            <EmailList />
                        </Route>
                    </Switch>
               </div>
                {sendMessageIsOpen && <SendMail />}
            </div>
                    )

            }


        </Router>
    );
}

export default App;
