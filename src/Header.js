import React, {useEffect} from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton, Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {logout} from './features/userSlice';
import {useDispatch} from 'react-redux';
import {auth} from "./firebase";
function Header(){
    const dispatch = useDispatch();
    useEffect(() => console.log("rendring header"));
    const user = useSelector(selectUser);


    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());

        })
    }

    return(
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img src="data:image/png;base64,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" alt=""/>
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder={"Search mail"}/>
                <ArrowDropDownIcon className={"header__inputCaret"} />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} className={"avatar"}/>
            </div>
        </div>
    )
}

export default Header;