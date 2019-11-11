import * as React from "react";

const blockStyle = {
    left: "1%",
    right: "1%",
    top: "1%",
    bottom: "1%",
};

const infoSection = {
    padding: "1%"
};

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
                            The wedding will take place at the Mission Inn of Orlando. Parking is available at the Mission Inn.<br />
                            [FILL IN MISSION INN DETAILS HERE, ADD PICS N SHIT. MENTION PARKING IS AVAILABLE AT THE VENUE]
                        </p>
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
                            While gifts are appreciated, we understand that coming to a wedding is a commitment itself. Your presence itself is gift enough.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}