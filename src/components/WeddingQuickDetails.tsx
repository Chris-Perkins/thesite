import * as React from "react";

const blockStyle = {
    left: "1%",
    right: "1%",
    top: "1%",
    bottom: "1%",

    display: "flex",
    flexWrap: "wrap" as "wrap"
};

const infoBlock = {
    padding: "1%"
};

const aspectFillPhotoBlock = {
    backgroundSize: "cover",
    overflow: "invisible",
    noRepeat: "50% 50%",

    minHeight: 175
};

export class WeddingQuickDetails extends React.Component {
    render() {
        return (
            <div className="fullContainer">
                <div style={blockStyle}>
                    <div style={infoBlock} className="collapsibleTwoColumnElement">
                        <h4>
                            Welcome to our wedding!
                        </h4>
                        <p>
                            We're so excited to share our day with those that we love most. Below are some details that will help you join us on our special day.
                        </p>
                        <p style={{marginTop: "1%"}}>
                            <b>Where:</b> 10400 FL-48, Howey-In-The-Hills, FL 34737<br/>
                            <b>When:</b> 5:30pm on June 27, 2020
                        </p>
                        <p style={{marginTop: "1%"}}>
                            Further details can be found below.
                        </p>
                    </div>
                    <div className="collapsibleTwoColumnElement" style={{...aspectFillPhotoBlock,...{background: "url('./imgs/meandlil.jpg') no-repeat center center"}}} />
                </div>
            </div>
        );
    }
}