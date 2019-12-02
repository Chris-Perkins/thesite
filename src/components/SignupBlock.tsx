import * as React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

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
    paddingRight: "2%"
};

const containerStyle = {
    backgroundColor: "#ebffe6"
};

export class SignupBlock extends React.Component {
    render() {
        return (
            <div className="fullContainer" style={containerStyle}>
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
        );
    }
}