import * as React from "react";

const blockStyle = {
    left: "1%",
    right: "1%",
    top: "1%",
    bottom: "1%",
};

const infoSection = {
    padding: "10px"
};

const mapsFrameContainer = {
    marginTop: "10px",

    width: 600, 
    maxWidth: "100%",
    height: 400
};

const googleMapsFrame = '<iframe top=0 left=0 right=0 bottom=0 width="100%" height="100%" margin=0 position="absolute" frameborder=0 src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBXoN1P9154gRBFmCgKtrG8o&key=AIzaSyBuYQ1LdimDqupYvIcl9Tm3pA2s5Ye8_yU" allowfullscreen></iframe>';

export class WeddingInfoBlock extends React.Component {
    render() {
        return (
            <div className="fullContainer" style={{backgroundColor: "#E0E0E0"}}>
                <div style={blockStyle}>
                    <div style={infoSection}>
                        <h3>
                            We're excited to have you come!
                        </h3>
                        <p>
                            The wedding will take place at the Mission Inn located in Howey In The Hills on June 27th, 2020. Complimentary parking will be available at the venue.
                        </p>
                        <p style={{marginTop: "1%"}}>
                            The address and further details about Mission Inn can be viewed at <a href="https://missioninnresort.com/">their website</a> or in the map provided below.
                        </p>
                        <div style={mapsFrameContainer} dangerouslySetInnerHTML={{__html: googleMapsFrame}} />
                    </div>
                    <div style={infoSection}>
                        <h3>
                            Stay overnight, even before the wedding.
                        </h3>
                        <p>
                            The Mission Inn has graciously offered special rates for guests of our wedding. Rates for guests will be $130 for a room per night, with limited availability. Please contact us to learn how to take advantage of this special rate.
                        </p>
                    </div>
                    <div style={infoSection}>
                        <h3>
                            Please attend in whatever you're most comfortable in.
                        </h3>
                        <p>
                            We understand that you may be coming from an area that has different weather than Florida's summer. As such, please dress for your own comfort. However, we do ask that semi-formal standards are followed; leave any gym shorts at home.
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