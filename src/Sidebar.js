import React, {useEffect} from 'react';
import './Sidebar.css';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption"
import StartIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {IconButton} from "@material-ui/core";
import PersonIco from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import {useDispatch} from "react-redux";
import {openSendMessage} from "./features/mailSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    useEffect(() => console.log("rendering Sidebar"));
    return (
        <div className={"sidebar"}>
            <Button startIcon={
                <AddIcon fontSize={"large"} />}  className={"sidebar__compose"}
                            onClick={() => dispatch(openSendMessage())}>
                 Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title={"Inbox"} number={54} selected={false}/>
            <SidebarOption Icon={StartIcon} title={"Starred"} number={54} selected={true}/>
            <SidebarOption Icon={AccessTimeIcon} title={"Snoozed"} number={54}  selected={false}/>
            <SidebarOption Icon={LabelImportantIcon} title={"Important"} number={54}  selected={false}/>
            <SidebarOption Icon={NearMeIcon} title={"Sent"} number={54}  selected={false}/>
            <SidebarOption Icon={NoteIcon} title={"Drafts"} number={54}  selected={false}/>
            <SidebarOption Icon={ExpandMoreIcon} title={"More"} number={54}  selected={false}/>

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIco />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>

                </div>
            </div>
        </div>
    );


}

export default Sidebar;