import * as React from "react";
import "axios";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Axios from "axios";

const container = {
    position: "relative" as "relative",
    margin: "0 0 0 0",
};

const backgroundDiv = {
    backgroundColor: "#ebffe6",
    background: "url('./imgs/cactus.png') repeat",
    opacity: 0.07,

    position: "absolute" as "absolute",
    margin: "0 0 0 0",
    padding: "0 0 0 0",
    width: "100%",
    height: "100%",

    zIndex: -5
};

const backgroundColorDiv = {
    backgroundColor: "#ebffe6",

    position: "absolute" as "absolute",
    margin: "0 0 0 0",
    padding: "0 0 0 0",
    width: "100%",
    height: "100%",

    zIndex: -10
};

const quizHeaderStyle = {
    textAlign: "center" as "center"
};

const quizBlockStyle = {
    boxShadow: "2px 2px 5px",

    backgroundColor: "#ffffff",
    borderRadius: "10px",

    maxWidth: "700px",
    width: "98%",
    
    marginTop: "2%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3%",

    padding: "3%"
};

const entrySection = {
    marginTop: "2%"
};

const entryStyles = {
    left: "10%",
    width: "80%",
};

const CancelToken = Axios.CancelToken;
const source = CancelToken.source();

export class SignupBlock extends React.Component<{}, { textFieldValue, fetching }> {
    
    constructor(props) {
        super(props);

        this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
        this._checkRegistrationStatus = this._checkRegistrationStatus.bind(this);
        this._setFetchingStatus = this._setFetchingStatus.bind(this);

        this.state = {textFieldValue: "", fetching: false};
    }

    _setFetchingStatus(isFetching) {
        if (isFetching === this.state.fetching) {
            // skip
            return;
        }

        this.setState({
            fetching: isFetching
          });
        this.forceUpdate();
    }

    _handleTextFieldChange(e) {
        this.setState({
            textFieldValue: e.target.value
          });
        this.forceUpdate();
    }

    async _checkRegistrationStatus() {
        source.cancel();

        this._setFetchingStatus(true);
        Axios.get("https://lillyandchriswedding.azurewebsites.net/check-invitation-status", {
            params: {
                name: this.state.textFieldValue
            }
        })
        .then((response) => {
            console.log(response);
            this._setFetchingStatus(false);
        }, (error) => {
            console.log(error.response);
            this._setFetchingStatus(false);
        });
    }
    
    render() {
        const fetchButtonEnabled = !(this.state.textFieldValue === "" || this.state.fetching);

        return (
            <div style={container}>
                <div style={backgroundDiv} />
                <div style={backgroundColorDiv} />
                <div className="fullContainer">
                    <h2 style={quizHeaderStyle}>
                        Accept Your Invitation
                    </h2>
                    <p style={quizHeaderStyle}>
                        Your acceptance allows us to accommodate you best.
                    </p>
                    <div style={quizBlockStyle}>
                        <h6 style={quizHeaderStyle}>
                            Please Enter Your First and Last Name
                        </h6>
                        <p style={{...quizHeaderStyle,...{fontSize: "2.0vh"}}}>
                            We'll check your invitation status based on your first and last name.<br/>
                            If have any questions, please contact Lilly or Chris.
                        </p>
                        <div style={entrySection}>
                            <div style={{padding: "1%"}} />
                            <TextField id="outlined-search" label="Your first and last name" type="search" variant="outlined" style={entryStyles} onChange={this._handleTextFieldChange} />
                            <div style={{padding: "1%"}} />
                            <Button variant="contained" color="primary" component="span" disabled={!fetchButtonEnabled} style={entryStyles} onClick={this._checkRegistrationStatus}>
                                {this.state.fetching ? "Loading..." : "Start Registration"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}