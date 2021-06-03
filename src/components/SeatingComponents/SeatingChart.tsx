import * as React from "react";
import '../../../style.css';
import { store } from "../../store";
import { ContactBlock } from "../ContactBlock";
import SearchBar from "material-ui-search-bar";
import { observer } from "mobx-react";

const blockStyle = {
    paddingLeft: "1%",
    paddingRight: "1%",
    paddingTop: "0.5%",
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

const searchStyle = {
    maxWidth: "500px",
    width: "90%",

    margin: "2% auto"
};

const selectedText = {
    color: "black" as "black"
};

const unselectedText = {
    color: "LightGray" as "LightGray"
};

const tableAssignments = [
    {
        tableNumber: 1,
        people: [
            "Chris Perkins",
            "Lilly Nava"
        ]
    },
    {
        tableNumber: 2,
        people: [
            "Irene Perkins",
            "Paul Perkins",
            "Auntie Heidi",
            "Auntie Daphne",
            "Beak Beax and +1",
            "Alexandria Perkins and +1",
            "Uncle Marty",
            "Ryaan Ferdous",
            "Arianna Ferdous",
            "Denise Mullinax",
            "Gerald Mullinax",
            "Rahul Reddy"
        ]
    },
    {        
        tableNumber: 3,
        people: [
            "Bear Bridgeman",
            "Alex Bridgeman and +1",
            "Bryce Bridgeman and +1",
            "Robert Bridgeman and +1",
            "Momma Bridge",
            "Papa Bridge",
            "Grandma Bridge"
        ]
    },
    {
        tableNumber: 4,
        people: [
            "Grant Mullinax",
            "Michael Mansfield",
            "Avi Rosenblum",
            "Jasper Zaporteza",
            "James Commerford and +1",
            "Jack Commerford",
            "Laura Commerford"
        ]
    },
    {
        tableNumber: 5,
        people: [
            "Cody McKee",
            "Gabby Bilka",
            "Sam Mueller",
            "Jacob Hughes",
            "Preethesh Puthran",
            "Ian Hudson",
            "Neel Jha and +1",
            "Aleksandr Diamond",
            "Charlie Tran"
        ]
    },
    {
        tableNumber: 6,
        people: [
            "Hanna Kawoosa",
            "Skyler Reimer",
            "Will Schnicke",
            "Scott Crawford",
            "Lily Chen",
            "Nathan Harris",
            "Daniel Lemmond",
            "Enoch Kim",
            "Dhruv Chawla"
        ]
    },
    {
        tableNumber: 7,
        people: [
            "Heriberto Nava",
            "Adriana Ortiz",
            "Enrique Lopez",
            "Karyme Balderas",
            "Rosa Nava",
            "Maria Ramirez",
            "Juan Ramirez"
        ]
    },
    {
        tableNumber: 8,
        people: [
            "Eddy Ortiz",
            "Daniel Ortiz",
            "Leti Martinez",
            "Joaquin Ortiz",
            "Lissette Ortiz",
            "Lexine Ortiz",
            "Padre Alfredo",
            "Graciela Hernandez"
        ]
    },
    {
        tableNumber: 9,
        people: [
            "Karla Nava and +1",
            "Sonia Yadav",
            "Chandrakant Yadav",
            "Olga Gomez",
            "Jaime Gomez",
            "Justin Gomez",
            "Jonathan Gomez",
            "Felipe Nava"
        ]
    },
    {
        tableNumber: 10,
        people: [
            "Rhiannon Peace and +1",
            "Kevin Peace",
            "Tabitha Peace",
            "Ryliegh Peace",
            "Regina Peace"
        ]
    },
    {
        tableNumber: 11,
        people: [
            "Duncan Quint and +1",
            "Logan Quint",
            "Scott Quint",
            "Denise Quint",
            "Helen Pounders",
            "Carolyna Belhadj"
        ]
    },
    {
        tableNumber: 12,
        people: [
            "Claudia Sanchez",
            "Ray Sanchez",
            "Henessey Hernandez",
            "Ray Sanchez Jr.",
            "Rosaline Sanchez",
            "Jaqueline Carillo"
        ]
    }
];

@observer
export class SeatingChart extends React.Component {
    render() {
        function isNameSearched(name: string)
        {
            return store.query === "" || name.toLowerCase().includes(store.query.toLowerCase());
        }

        const priorityTables = tableAssignments.filter((ta) => ta.people.some((name) => isNameSearched(name)));
        const nonPriorityTables = tableAssignments.filter((ta) => !(ta.people.some((name) => isNameSearched(name))));
        const sortedTables = [].concat(priorityTables).concat(nonPriorityTables);

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
                <SearchBar
                    value={store.query}
                    onChange={(newValue) => store.query = newValue}
                    onCancelSearch={() => store.query = ""}
                    style={searchStyle}
                    placeholder={"Search your name"}
                />
                <div className="fullContainer" style={blockStyle}>
                    {sortedTables.map((tableGroup) => (
                        <div className="collapsibleFourColumnElement">
                            <div style={innerBlock}>
                                <h4 style={tableText}>Table {tableGroup.tableNumber}</h4>
                                <ul>
                                    {
                                        tableGroup.people.sort().map((name) => 
                                        <li style={isNameSearched(name) ? selectedText : unselectedText}>{name}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <ContactBlock />
            </div>
        );
    }
}