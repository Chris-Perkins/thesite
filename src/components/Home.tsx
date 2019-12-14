import * as React from "react";
import { WeddingInfoBlock } from "./WeddingInfoBlock";
import { HeaderPhotoBanner } from "./HeaderPhotoBanner";
import { SignupBlock } from "./SignupBlock";
import { ContactBlock } from "./ContactBlock";
import { WeddingQuickDetails } from "./WeddingQuickDetails";
import { InfoBlockBanner } from "./InfoBlockBanner";
import { SignupWindow } from "./SignupWindow";
import '../../style.css';

const pageStyle = {
    margin:0,
    position:"absolute" as "absolute",
};

export class Home extends React.Component {
    render() {
        return (
            <div style={pageStyle}>
                <SignupWindow />
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