import * as React from "react";
import "axios";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Axios from "axios";
import { store } from "../../store";

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
    marginBottom: "1%",

    padding: "2%"
};

const entrySection = {
    marginTop: "2%"
};

const cantMakeItButton = {
    marginTop: "1%",
    marginBottom: "1%",
    maxWidth: "700px",
    width: "98%",
    
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center" as "center"
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
        this._unsignUpPress = this._unsignUpPress.bind(this);

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

    _unsignUpPress() {
        store.signupOpen = true;
        store.isCancelling = true;
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
            if (response.data.invited) {
                store.name = response.data.name;
                store.signupOpen = true;
                store.plusOneInvited = response.data.plusOneInvited;
            } else {
                alert("We were unable to locate your invitation. Please check your first and last name's spelling and try again. If this error persists, please contact Lilly or Chris");
            }
            this._setFetchingStatus(false);
        }, (error) => {
            alert("Unable to fetch your invitation status. Please try again. If this error persists, please contact Lilly or Chris.");
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
                            RSVPs are closed at this time.
                        </h6>
                        <p style={{...quizHeaderStyle,...{fontSize: "2.0vh"}}}>
                            The wedding is coming up on us shortly! If you need to modify your RSVP, please contact the bride or groom.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}