import * as React from "react";

const pageStyle = {
    width: "100%",
    padding: "0%",
    paddingTop: "15%",
    maxHeight: "15%",
    background: "url('imgs/cat.jpg') no-repeat center center",
    backgroundSize: "cover",
    overflow: "invisible",
    noRepeat: "50% 50%"
};

export class HeaderPhotoBanner extends React.Component {
    render() {
        return (
            <div style={pageStyle} />
        );
    }
}