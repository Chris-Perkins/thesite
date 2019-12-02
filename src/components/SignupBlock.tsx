import * as React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

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
    borderRadius: "3px",

    maxWidth: "750px",
    width: "98%",
    
    marginTop: "2%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3%",

    paddingLeft: "2%",
    paddingRight: "2%",
};

export class SignupBlock extends React.Component {
    render() {
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
                    <CardActionArea style={quizBlockStyle}>
                        <CardContent>
                            <p>
                                TEST<br/>
                                YO MORE STUFF IN HERE<br/>
                                YO MORE STUFF IN HERE<br/>
                                YO MORE STUFF IN HERE<br/>
                                YO MORE STUFF IN HERE
                            </p>
                        </CardContent>
                    </CardActionArea>
                </div>
            </div>
        );
    }
}