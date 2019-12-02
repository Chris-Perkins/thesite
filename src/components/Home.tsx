import * as React from "react";
import { WeddingInfoBlock } from "./WeddingInfoBlock";
import { HeaderPhotoBanner } from "./HeaderPhotoBanner";
import { SignupBlock } from "./SignupBlock";
import { ContactBlock } from "./ContactBlock";
import { WeddingQuickDetails } from "./WeddingQuickDetails";
import { InfoBlockBanner } from "./InfoBlockBanner";
import '../../style.css';

const pageStyle = {
    margin:0,
    padding: 0,
    left: 0,
    right: 0,
    position:"absolute" as "absolute",
};

export class Home extends React.Component {
    render() {
        return (
            <div style={pageStyle}>
                <HeaderPhotoBanner />
                <WeddingQuickDetails />
                <SignupBlock />
                <InfoBlockBanner />
                <WeddingInfoBlock />
                <ContactBlock />
            </div>
        );
    }
}