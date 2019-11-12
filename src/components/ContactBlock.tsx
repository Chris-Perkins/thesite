import * as React from "react";

const contactDetails = {
    color: "#ffffff",
    textAlign: "center" as "center",
    
    padding: "1%"
};

const separateDivsContinuousBlock = {
    margin: 0,
    padding: 0,
};

export class ContactBlock extends React.Component {
    render() {
        return (
            <div className="fullContainer" style={{backgroundColor: "#0E0E0E", padding: "2px"}}>
                <p style={contactDetails}>
                    If you need to contact us for any questions, feel free to send an email to&nbsp;
                    <span style={separateDivsContinuousBlock}>
                        chr
                    </span>
                    <span style={separateDivsContinuousBlock}>
                        is
                    </span>
                    <span style={separateDivsContinuousBlock}>
                        @
                    </span>
                    <span style={separateDivsContinuousBlock}>
                        chri
                    </span>
                    <span style={separateDivsContinuousBlock}>
                        sperk
                    </span>
                    <span style={separateDivsContinuousBlock}>
                        ins
                    </span>
                    <span style={separateDivsContinuousBlock}>
                        .me
                    </span>
                </p>
            </div>
        );
    }
}