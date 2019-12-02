import * as React from "react";

const pageStyle = {
    width: "100%",
    padding: "0%",
    paddingTop: "10%",

    background: "url('./imgs/meandlil.jpg') no-repeat center center",
    backgroundSize: "cover",
    overflow: "invisible",
    noRepeat: "50% 50%"
};

const headerStyling = {
    textShadow: "2px 2px #000000",
    color: "white",

    textAlign: "center" as "center",
    
    width: "100%",
    marginBottom: "2%"
};

export class InfoBlockBanner extends React.Component {
    render() {
        return (
            <div style={pageStyle}>
                    <h1 style={headerStyling}>
                        Details
                    </h1>
            </div>
        );
    }
}