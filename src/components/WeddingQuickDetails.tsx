import * as React from "react";

const blockStyle = {
    left: "1%",
    right: "1%",
    top: "1%",
    bottom: "1%"
};

const infoBlock = {
    padding: "1%"
};

export class WeddingQuickDetails extends React.Component {
    render() {
        return (
            <div className="fullContainer">
                <div style={blockStyle}>
                    <div style={infoBlock}>
                        <h4>
                            Welcome to our wedding!
                        </h4>
                        <p>
                            We're so excited to share our day with those that we love most. Below are some details that will help you join us on our special day.
                        </p>
                    </div>
                    <div style={infoBlock}>
                        <h5>
                            Where
                        </h5>
                        <p>
                            Our wedding will take place at The Mission Inn Resort and Club, a luxury resort located in Howey in the Hills, Florida.<br/>
                            <br/>
                            10400 FL-48, Howey-In-The-Hills, FL 34737<br/>
                        </p>
                    </div>
                    <div style={infoBlock}>
                        <h5>
                            When
                        </h5>
                        <p>
                            The wedding will take place on June 27, 2020 at 5:30pm. Further itinerary will be provided on the day of the ceremony.<br/>
                            <br/>
                            We ask that you arrive on time to ensure a smooth, stress-free ceremony that everyone can enjoy.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}