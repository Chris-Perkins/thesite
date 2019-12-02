import * as React from "react";

const container = {
    position: "relative" as "relative",
    margin: "0 0 0 0"
};

const backgroundDiv = {
    background: "url('./imgs/leaftile.png') repeat",
    opacity: 0.05,

    position: "absolute" as "absolute",
    margin: "0 0 0 0",
    padding: "0 0 0 0",
    width: "100%",
    height: "100%",

    zIndex: -5
};

const blockStyle = {
    left: "1%",
    right: "1%",
    top: "1%",
    bottom: "1%"
};

const infoSection = {
    padding: "2%",

    display: "flex",
    flexWrap: "wrap" as "wrap",
};

const aspectFillPhotoBlock = {
    backgroundSize: "cover",
    overflow: "invisible",
    noRepeat: "50% 50%",

    minHeight: 175
};

const separateDivsContinuousBlock = {
    margin: 0,
    padding: 0
};

const googleMapsFrame = '<iframe top=0 left=0 right=0 bottom=0 width="100%" height="100%" margin=0 position="absolute" frameborder=0 src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBXoN1P9154gRBFmCgKtrG8o&key=AIzaSyBuYQ1LdimDqupYvIcl9Tm3pA2s5Ye8_yU" allowfullscreen></iframe>';

export class WeddingInfoBlock extends React.Component {
    render() {
        return (
            <div style={container}>
                <div style={backgroundDiv} />
                <div className="fullContainer">
                    <div style={blockStyle}>
                        <div style={infoSection}>
                            <div className="collapsibleTwoColumnElement">
                                <h3>
                                    We're excited to have you come!
                                </h3>
                                <p>
                                    The wedding will take place at the Mission Inn located in Howey In The Hills on June 27th, 2020.
                                </p>
                                <p style={{marginTop: "1%"}}>
                                    Complimentary parking will be available at the venue. From the main lobby, there will be signs guiding you to our ceremony. If you get lost, please call the Mission Inn desk: <a href="tel:3523243101">(352) 324-3101</a>
                                </p>
                                <p style={{marginTop: "1%"}}>
                                    Further details about Mission Inn can be viewed at <a href="https://missioninnresort.com/">their website</a>.
                                </p>
                            </div>
                            <div className="collapsibleTwoColumnElement" dangerouslySetInnerHTML={{__html: googleMapsFrame}} />
                        </div>
                        <div style={infoSection}>
                            <div className="collapsibleTwoColumnElement">
                                <h3>
                                    Stay overnight, even before the wedding.
                                </h3>
                                <p>
                                    The Mission Inn has graciously offered special rates for guests of our wedding. Rates for guests will be roughly $170 for a room per night, with limited availability. Please contact us to learn how to take advantage of this special rate.
                                </p>
                            </div>
                            <div className="collapsibleTwoColumnElement" style={{...aspectFillPhotoBlock,...{background: "url('./imgs/night.jpg') no-repeat center center"}}} />
                        </div>
                        <div style={infoSection}>
                            <div className="collapsibleTwoColumnElement">
                                <h3>
                                    Dress to your comfort; it's Florida.
                                </h3>
                                <p>
                                    Please dress to your comfort in dressy casual clothes; this is a Florida summer. Our only request is that you leave any gym shorts and white clothes at home.
                                </p>
                            </div>
                            <div className="collapsibleTwoColumnElement">
                                <h3>
                                    No, you don't need to bring a gift.
                                </h3>
                                <p>
                                    While gifts are appreciated, we understand that coming to a wedding can be a large commitment. Your presence is a gift itself.
                                </p>
                            </div>
                        </div>
                        <div style={{paddingLeft: "2%", paddingRight: "2%"}}>
                            <h3>
                                Have questions? Contact us!
                            </h3>
                            <p>
                                To ensure you're as comfortable as possible, please contact either Lilly or Chris with any questions. From general "Florida-prep" to more specific wedding details, we'd be happy to assist.
                            </p>
                            <p style={{marginTop: "0.5%"}}>
                                Contact Lilly:&nbsp;
                                <span style={separateDivsContinuousBlock}>
                                    115
                                </span>
                                <span style={separateDivsContinuousBlock}>
                                    lillyn
                                </span>
                                <span style={separateDivsContinuousBlock}>
                                    @
                                </span>
                                <span style={separateDivsContinuousBlock}>
                                    gm
                                </span>
                                <span style={separateDivsContinuousBlock}>
                                    ail
                                </span>
                                <span style={separateDivsContinuousBlock}>
                                    .
                                </span>
                                <span style={separateDivsContinuousBlock}>
                                    com
                                </span>
                            </p>
                            <p style={{marginTop: "0.5%"}}>
                                Contact Chris:&nbsp;
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
                    </div>
                </div>
            </div>
        );
    }
}