import * as React from "react";

const container = {
    position: "relative" as "relative",
    margin: "0 0 0 0"
};

const blockStyle = {
    left: "1%",
    right: "1%",
    top: "0%",
    bottom: "0%",

    display: "block" as "block",
};

const infoBlock = {
    padding: 0,
    alignContent: "center" as "center",
    textAlign: "center" as "center",
    width: "100%",

    zIndex: 5
};

const subSectionBlock = {
    padding: "2% 5% 0 5%"
};

const miniHeader = {
    fontSize: "2.5vh",
    marginBottom: "0.5%"
};

const leafAccent = {
    background: "url('./imgs/leafmealone.png') no-repeat center center",
    backgroundSize: "contain",

    paddingBottom: "20%",
    minWidth: "200px",
    minHeight: "300px",
    width: "15%",

    display: "block" as "block",
    position: "absolute" as "absolute",
    zIndex: -1
};

const leftLeafAccent = {
    left: 0
};

const rightLeafAccent = {
    right: 0,
    bottom: 0,
    transform: "scale(-1, -1)"
};

const backgroundDiv = {
    background: "url('./imgs/dots.png') repeat",

    position: "absolute" as "absolute",
    margin: "0 0 0 0",
    padding: "0 0 0 0",
    width: "100%",
    height: "100%",

    zIndex: -5
};

export class WeddingQuickDetails extends React.Component {
    render() {
        return (
            <div style={container}>
                <div style={{...leafAccent,...leftLeafAccent}} className="hiddenOnMobile" />
                <div style={{...leafAccent,...rightLeafAccent}} className="hiddenOnMobile" />
                <div style={backgroundDiv} />
                <div className="fullContainer">
                    <div style={blockStyle}>
                        <div style={infoBlock}>
                            <div style={subSectionBlock}>
                                <h4>
                                    WE'RE GETTING MARRIED!
                                </h4>
                                <p>
                                    We're so excited to share our day with those that we love most!
                                </p>
                            </div>
                            <div style={subSectionBlock}>
                                <p style={miniHeader}>
                                    ON
                                </p>
                                <h5>
                                    JUNE 27, 2020 at 5:30PM
                                </h5>
                            </div>
                            <div style={subSectionBlock}>
                                <p style={miniHeader}>
                                    AT
                                </p>
                                <h5>
                                    MISSION INN RESORT &amp; CLUB
                                </h5>
                                <p style={miniHeader}>
                                    Howey in the Hills, Florida
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}