import * as React from "react";
import { observer } from 'mobx-react';
import "axios";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from "@material-ui/core/styles";

import { store } from "../store";

const container = {
    position: "fixed" as "fixed",
    width: "100%",
    height: "100%",

    zIndex: 100,
    backgroundColor: "rgba(3, 31, 11, 0.7)"
};

const window = {
    // center vertically
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    // styles
    backgroundColor: "#ffffff",
    borderRadius: "10px",

    padding: "1%",

    // Mobile shit
    maxWidth: "95%",
    width: "500px",
    minWidth: "50%",
    maxHeight: "100%",

    textAlign: "center" as "center"
};

const buttonsContainer = {
    display: "flex",
    flexWrap: "wrap" as "wrap",

    margin: 0,
    padding: "1%",
    paddingTop: "2%"
};

const full = {
    margin: 0,
    width: "100%",
    height: "100%"
};

const tableStyle = {
    margin: "auto" as "auto",
    textAlign: "left" as "left",
    borderSpacing: "5px"
};

const tableContainer = {
    padding: "10px"
};

@observer
export class SignupWindow extends React.Component<{}, {remounted: string}> {

    constructor(props) {
        super(props);

        this.getTable = this.getTable.bind(this);
        this.getDescription = this.getDescription.bind(this);
        this.getWindowContents = this.getWindowContents.bind(this);
        this.getConfirmedWindowDescription = this.getConfirmedWindowDescription.bind(this);
        this.getSubstringIfNecessary = this.getSubstringIfNecessary.bind(this);

        this._updateOver21 = this._updateOver21.bind(this);
        this._updateNotes = this._updateNotes.bind(this);
        this._updateEmail = this._updateEmail.bind(this);
        this._updatePlusOneAttending = this._updatePlusOneAttending.bind(this);
        this._updatePlusOneOver21 = this._updatePlusOneOver21.bind(this);

        this._cancel = this._cancel.bind(this);
        this._textFocus = this._textFocus.bind(this);

        this.state = {remounted: null};
    }

    _cancel() {
        store.reset();
    }

    getConfirmedWindowDescription() {
        return <div>
            <p>
                {"Name: " + store.name}
            </p>
            <p>
                {store.over21 ? "You are over twenty one" : "You are not over 21"}
            </p>
            {
                store.plusOneInvited ? <p>
                    {"Plus one coming: " + (store.plusOneAttending ? "Yes" : "No")}
                </p> : null
            }
            {
                store.plusOneAttending ? <p>
                    {"Plus one over 21: " + (store.plusOneOver21)}
                </p> : null
            }
            {
                (store.dietaryRestrictions === "" ? null : "Your notes: " + this.getSubstringIfNecessary(60, store.dietaryRestrictions))
            }
            <p>
                {"Your email: " + this.getSubstringIfNecessary(40, store.email)}
            </p>
        </div>;
    }

    _textFocus() {
        this.setState({remounted: "x"});
    }

    _updateOver21(e, isChecked) {
        store.over21 = isChecked;
    }

    _updateNotes(e) {
        store.dietaryRestrictions = e.target.value;
    }

    _updateEmail(e) {
        store.email = e.target.value;
    }

    _updatePlusOneAttending(e, isChecked) {
        store.plusOneAttending = isChecked;
    }

    _updatePlusOneOver21(e, isChecked) {
        store.plusOneOver21 = isChecked;
    }

    getSubstringIfNecessary(length, str) {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }

    getWindowContents() {
        if (store.signupConfirmed) {
            return <div style={full}>
                    <h6 style={{margin: 0, paddingTop: "8px"}}>
                        Your acceptance is confirmed!
                    </h6>
                    <p style={{fontSize: "1.75vh"}}>
                        You can close this window now.
                    </p>
                    <p style={{paddingTop: "10px"}}>
                        <b>Here's what we have:</b>
                    </p>
                    <p style={{padding: "1%"}}>
                        {this.getConfirmedWindowDescription()}
                    </p>
                    <Button variant="contained" color="primary" style={full} onClick={this._cancel}>
                        Close
                    </Button>
                </div>;
        } else {
            return <div style={full}>
                        <h6 style={{margin: 0, paddingTop: "8px"}}>
                            Accept Your Invite
                        </h6>
                        <p style={{fontSize: "1.75vh"}}>
                            {this.getDescription()}
                        </p>
                        <div style={tableContainer}>
                            {this.getTable()}
                        </div>
                        <div style={buttonsContainer}>
                            <div className="collapsibleTwoColumnElement">
                                <Button variant="contained" color="secondary" style={full} onClick={this._cancel} disabled={store.uploading}>
                                    Cancel
                                </Button>
                            </div>
                            <div className="collapsibleTwoColumnElement">
                                <Button variant="contained" color="primary" style={full} onClick={store.upload} disabled={store.uploading || store.email === ""}>
                                    Accept Invite
                                </Button>
                            </div>
                        </div>
                    </div>;
        }
    }

    getDescription() {
        if (!store.plusOneInvited) {
            return "We have a few quick questions before we confirm your acceptance.";
        } else {
            return "You and a guest are invited to our wedding.";
        }
    }

    getTable() {
        const baseRow = 
            <tr>
                <td>
                    <Checkbox onChange={this._updateOver21} color="primary" disabled={store.uploading} />
                </td>
                <td>
                    <p>
                        Are you over 21?
                    </p>
                </td>
            </tr>;
        const notesRow =
                <tr>
                    <td colSpan={2} style={{width: "100%"}}>
                        <p style={{textAlign: "center" as "center", paddingBottom: "10px", paddingTop: "2%"}}>
                            <b>Is there anything we should know?</b>
                        </p>
                        <TextField key={this.state.remounted} fullWidth variant="outlined" multiline rowsMax="3" label="Notes" placeholder="Children, allergies, etc." onChange={this._updateNotes} disabled={store.uploading} />
                    </td>
                </tr>;
        const emailRow = 
            <tr>
                <td colSpan={2} style={{width: "100%"}}>
                    <p style={{textAlign: "center" as "center", paddingTop: "2%"}}>
                        <b>What is your email?</b>
                    </p>
                    <p style={{textAlign: "center" as "center", fontSize: "1.75vh", paddingBottom: "10px"}}>
                        We'll only contact you with news about the wedding and to send out photos afterwards.
                    </p>
                    <TextField key={this.state.remounted} fullWidth variant="outlined" rows="3" label="Email" required placeholder="you@domain.com" onChange={this._updateEmail} disabled={store.uploading} />
                </td>
            </tr>;

        if (!store.plusOneInvited) {
            return <table style={tableStyle}>
                        <tr>
                            <table>
                                {baseRow}
                            </table>
                        </tr>
                        {notesRow}
                        {emailRow}
                    </table>;
        } else {
            return <table style={tableStyle}>
                        {baseRow}
                        <tr>
                            <td>
                                <Checkbox onChange={this._updatePlusOneAttending} color="primary" disabled={store.uploading} />
                            </td>
                            <td>
                                <p>
                                    Are you bringing a guest?
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox onChange={this._updatePlusOneOver21} color="primary" disabled={store.uploading} />
                            </td>
                            <td>
                                <p>
                                    If applicable, is your guest over 21?
                                </p>
                            </td>
                        </tr>
                        {notesRow}
                        {emailRow}
                   </table>;
        }
    }
    
    render() {
        if (store.signupOpen) {
            if (this.state.remounted === null) {
                setTimeout(this._textFocus, 100);
            }
        }

        return (
            <div style={{...container,...{display: store.signupOpen ? "block" as "block" : "none" as "none"}}}>
                <div style={window}>
                    {this.getWindowContents()}
                </div>
            </div>
        );
    }
}