import React from 'react'
import './EmailList.css'
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People"
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from "./Section";
import EmailRow from "./EmailRow";


function EmailList() {
    return (
        <div className={'emailList'} >
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>


            </div>
            <div className="emailList__sections">

                <Section Icon={InboxIcon} title={"primary"} color={"red"} selected/>
                <Section Icon={PeopleIcon} title={"Social"} color={"#1A73E8"}/>
                <Section Icon={LocalOfferIcon} title={"Promotions"} color={"gray"}/>



            </div>
            <EmailRow
                title={"Twitch"}
                subject={"Hey fellow streamer !!!"}
                description={ "This is a test"}
                time={"10pm"}
                />
                <EmailRow
                title={"Twitch"}
                subject={"Hey fellow streamer !!!"}
                description={ "This is a test that aims to do some work in the back"}
                time={"10pm"}
                />

        </div>
    )
}

export default EmailList;