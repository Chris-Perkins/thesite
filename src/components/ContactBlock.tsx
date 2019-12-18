import * as React from "react";

const contactDetails = {
    color: "black",
    textAlign: "center" as "center",
    
    padding: "1%"
};

export class ContactBlock extends React.Component {
    render() {
        return (
            <div className="fullContainer" style={{backgroundColor: "#e9ffe0", padding: 0}}>
                <div style={{height: "1px", width: "100%", backgroundColor: "black"}} />
                <p style={contactDetails}>
                    Made with ♥️ by the bride and groom
                </p>
            </div>
        );
    }
}