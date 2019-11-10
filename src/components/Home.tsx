import * as React from "react";
import { WeddingInfoBlock } from "./WeddingInfoBlock";
import { HeaderPhotoBanner } from "./HeaderPhotoBanner";
import { SignupBlock } from "./SignupBlock";
import { ContactBlock } from "./ContactBlock";

const pageStyle = {
    margin:"0%",
    width: "100%",
    minHeight:"100%",
    padding: "0%",
    position:"absolute" as "absolute",
};

export class Home extends React.Component {
    render() {
        return (
            <div style={pageStyle}>
                <HeaderPhotoBanner />
                <SignupBlock />
                <WeddingInfoBlock />
                <ContactBlock />
            </div>
        );
    }
}