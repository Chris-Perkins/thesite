import * as React from "react";

const contactDetails = {
    color: "#ffffff",
    textAlign: "center" as "center",
    
    padding: "1%"
};

export class ContactBlock extends React.Component {
    render() {
        return (
            <div className="fullContainer" style={{backgroundColor: "#062e00", padding: "2px"}}>
                <p style={contactDetails}>
                    Made with ❤️ by the bride and groom
                </p>
            </div>
        );
    }
}