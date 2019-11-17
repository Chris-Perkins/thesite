import * as React from "react";

const pageStyle = {
    width: "100%",
    padding: "0%",
    paddingTop: "5%",

    background: "url('./imgs/banner.jpg') no-repeat center center",
    backgroundSize: "cover",
    overflow: "invisible",
    noRepeat: "50% 50%"
};

const headerBlockSpacing = {
    padding: "1%"
};

const headerStyling = {
    color: "white",
    textAlign: "center" as "center",
    width: "100%",

    textShadow: "2px 2px #000000"
};

export class HeaderPhotoBanner extends React.Component {
    render() {
        return (
            <div style={pageStyle}>
                <div style={headerBlockSpacing}>
                    <h1 style={headerStyling}>
                        Lilly and Chris's Wedding
                    </h1>
                    <h3 style={headerStyling}>
                        June 27th, 2020
                    </h3>
                </div>
            </div>
        );
    }
}