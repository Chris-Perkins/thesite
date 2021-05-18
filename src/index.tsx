import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./components/HomeComponents/Home";
import { SeatingChart } from "./components/SeatingComponents/SeatingChart";
import { HashRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/seating" component={SeatingChart} />
        </div>
    </Router>,
    document.getElementById("main"),
);
