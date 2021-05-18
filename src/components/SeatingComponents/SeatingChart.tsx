import * as React from "react";
import '../../../style.css';
import { ContactBlock } from "../ContactBlock";

const blockStyle = {
    paddingLeft: "1%",
    paddingRight: "1%",
    paddingTop: "2%",
    paddingBottom: "2%",
    
    justifyContent: "center" as "center",
    display: "flex",
    flexWrap: "wrap" as "wrap",
};

const innerBlock = {
    margin: 0,
    padding: "1%"
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

const container = {
    position: "absolute" as "absolute",
    margin: "0 0 0 0",
    
    width: "100%",
    minHeight: "100%"
};

const mainText = {
    textAlign: "center" as "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    
    paddingTop: "1.5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "1.5%",
    margin: 0
};

const tableText = {
};

const tableAssignments = [
    [
        "becca stinky",
        "becca gay",
        "becca poo poo",
        "becca dummy",
        "becca cool",
        "becca awesome"
    ],
    [
        "poo poo",
        "ca ca",
        "pee pee pee",
        "lorus ipsum",
        "brown dog",
        "lazy fox"
    ],
    [
        "poo poo",
        "ca ca",
        "pee pee pee",
        "lorus ipsum",
        "brown dog",
        "lazy fox"
    ],
    [
        "poo poo",
        "ca ca",
        "pee pee pee",
        "lorus ipsum",
        "brown dog",
        "lazy fox"
    ],
    [
        "poo poo",
        "ca ca",
        "pee pee pee",
        "lorus ipsum",
        "brown dog",
        "lazy fox"
    ],
    [
        "poo poo",
        "ca ca",
        "pee pee pee",
        "lorus ipsum",
        "brown dog",
        "lazy fox"
    ],
    [
        "poo poo",
        "ca ca",
        "pee pee pee",
        "lorus ipsum",
        "brown dog",
        "lazy fox"
    ],
    [
        "poo poo",
        "ca ca",
        "pee pee pee",
        "lorus ipsum",
        "brown dog",
        "lazy fox"
    ],
    [
        "poo poo",
        "ca ca",
        "pee pee pee",
        "lorus ipsum",
        "brown dog",
        "lazy fox"
    ],
    [
        "poo poo",
        "ca ca",
        "pee pee pee",
        "lorus ipsum",
        "brown dog",
        "lazy fox"
    ],
    [
        "poo poo",
        "ca ca",
        "pee pee pee",
        "lorus ipsum",
        "brown dog",
        "lazy fox"
    ],
    [
    ]
];

export class SeatingChart extends React.Component {
    render() {
        return (
            <div style={container}>
                <div style={backgroundDiv} />
                <div style={mainText}>
                    <h2>
                        We're so glad you can come!
                    </h2>
                    <p>
                        You are assigned a table, and not a specific seat. Sit wherever you prefer at your designated table. ♥
                    </p>
                </div>
                <div className="fullContainer" style={blockStyle}>
                    {tableAssignments.map((tableGroup, index) => (
                        <div className="collapsibleFourColumnElement">
                            {tableGroup.length == 0 
                            ? <span></span> 
                            : <div style={innerBlock}>
                                <h4 style={tableText}>Table {index + 1}</h4>
                                <ul>{tableGroup.sort().map((name) => <li>{name}</li>)}</ul>
                              </div>}
                        </div>
                    ))}
                </div>
                <ContactBlock />
            </div>
        );
    }
}