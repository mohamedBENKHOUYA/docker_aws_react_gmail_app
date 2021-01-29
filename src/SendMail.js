import React, {useEffect, useState} from 'react';

import './SendMail.css';
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {closeSendMessage} from "./features/mailSlice";
import {db} from "./firebase";
import firebase from 'firebase';

function SendMail() {
    const {register, handleSubmit, watch, errors} = useForm();
    const dispatch = useDispatch();

    useEffect(() => console.log("rendering sendMail"));
    const onSubmit = (formData) => {
        console.log(formData);
        const {to,subject,message} = formData;
        db.collection("emails").add({
            to: to,
            subject: subject,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then((success)=> {
            dispatch(closeSendMessage());
            console.log(success)})
            .catch((error) => (console.log(error)));
    }

    return (
        <div className={"sendMail"}>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <div className="close__wrap">
                <CloseIcon className={"sendMail__close"} onClick={() => dispatch(closeSendMessage())}/>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name={"to"} placeholder={"To"} type="text" ref={register({required: true})}/>
                {errors.to && <p className={"sendMail__error"}>To is required</p>}
                <input name={"subject"} placeholder={"Subject"} type="text" ref={register({required: true})}/>
                {errors.subject && <p className={"sendMail__error"}>subject is required</p>}
                <input name={"message"} placeholder={"Message..."} type="text" className={"sendMail__message"} ref={register({required: true})}/>
                {errors.message && <p className={"sendMail__error"}>Message is required</p>}
                <div className="sendMail__options">
                    <Button
                        className={"sendMail__send"}
                        variant={"contained"}
                        color={"primary"}
                        type={"submit"}
                    >Send</Button>
                </div>
            </form>
        </div>
    )
};

export default SendMail;