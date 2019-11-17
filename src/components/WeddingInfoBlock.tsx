import * as React from "react";

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

const googleMapsFrame = '<iframe top=0 left=0 right=0 bottom=0 width="100%" height="100%" margin=0 position="absolute" frameborder=0 src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBXoN1P9154gRBFmCgKtrG8o&key=AIzaSyBuYQ1LdimDqupYvIcl9Tm3pA2s5Ye8_yU" allowfullscreen></iframe>';

export class WeddingInfoBlock extends React.Component {
    render() {
        return (
            <div className="fullContainer" style={{backgroundColor: "#E0E0E0"}}>
                <div style={blockStyle}>
                    <div style={infoSection}>
                        <div className="collapsibleTwoColumnElement">
                            <h3>
                                We're excited to have you come!
                            </h3>
                            <p>
                                Complimentary parking will be available at the Mission Inn, so please park close to the main lobby. From the main lobby, there will be signs guiding you to our ceremony. If you get lost, please call the Mission Inn desk: <a href="tel:3523243101">(352) 324-3101</a>
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
                                The Mission Inn has graciously offered special rates for guests of our wedding. Rates for guests will be $130 for a room per night, with limited availability. Please contact us to learn how to take advantage of this special rate.
                            </p>
                        </div>
                        <div className="collapsibleTwoColumnElement" style={{...aspectFillPhotoBlock,...{background: "url('./imgs/night.jpg') no-repeat center center"}}} />
                    </div>
                    <div style={infoSection}>
                        <h3>
                            Dress to your comfort; it's Florida.
                        </h3>
                        <p>
                            Please dress to your comfort in semi-casual clothes; this is a Florida summer. Our only ask is that you leave any gym shorts at home.
                        </p>
                    </div>
                    <div style={infoSection}>
                        <h3>
                            No, you don't need to bring a gift.
                        </h3>
                        <p>
                            While gifts are appreciated, we understand that coming to a wedding can be a large commitment. Your presence is a gift itself.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}