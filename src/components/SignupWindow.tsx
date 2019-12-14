import * as React from "react";
import "axios";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { textAlign } from "@material-ui/system";

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

export class SignupWindow extends React.Component {

    constructor(props) {
        super(props);

        this.getTable = this.getTable.bind(this);
        this.getDescription = this.getDescription.bind(this);
    }

    getDescription() {
        if (/* +1 not invited */ true) {
            return "We have a few quick questions before we confirm your acceptance.";
        } else {
            return "You and a guest are invited to our wedding.";
        }
    }

    getTable() {
        const baseRow = 
            <tr>
                <td>
                    <Checkbox />
                </td>
                <td>
                    <p>
                        Are you over 21?
                    </p>
                </td>
            </tr>;
        const notesRow =
                <tr>
                    <td colSpan={2}>
                        <p style={{textAlign: "center" as "center", paddingBottom: "10px", paddingTop: "2%"}}>
                            <b>Is there anything we should know?</b>
                        </p>
                        <TextField style={{width: "100%"}} variant="outlined" multiline rowsMax="3" label="Notes" placeholder="Children, allergies, etc." />
                    </td>
                </tr>;
        const emailRow = 
            <tr>
                <td colSpan={2}>
                    <p style={{textAlign: "center" as "center", paddingTop: "2%"}}>
                        <b>What is your email?</b>
                    </p>
                    <p style={{textAlign: "center" as "center", fontSize: "1.75vh", paddingBottom: "10px"}}>
                        We'll only contact you with news about the wedding and to send out photos afterwards.
                    </p>
                    <TextField style={{width: "100%"}} variant="outlined" rows="3" label="Email" placeholder="you@domain.com" />
                </td>
            </tr>;

        if (/* +1 not invited */ false) {
            return <div>
                        <table style={tableStyle}>
                            {baseRow}
                        </table>
                        <table style={tableStyle}>
                            {notesRow}
                            {emailRow}
                        </table>
                    </div>;
        } else {
            return <table style={tableStyle}>
                        {baseRow}
                        <tr>
                            <td>
                                <Checkbox />
                            </td>
                            <td>
                                <p>
                                    Are you bringing a guest?
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox />
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
        return (
            <div style={container}>
                <div style={window}>
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
                            <Button variant="contained" color="secondary" style={full}>
                                Cancel
                            </Button>
                        </div>
                        <div className="collapsibleTwoColumnElement">
                            <Button variant="contained" color="primary" style={full}>
                                Accept Invite
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}