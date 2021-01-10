import React from 'react';
import Header from './Header.js'
import './App.css';
import Sidebar from './Sidebar.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Mail from "./Mail.js";
import EmailList from './EmailList.js';
import SendMail from "./SendMail";
import {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";


function App() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
    return (
        <Router>
            <div>
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
        </Router>
    );
}

export default App;
