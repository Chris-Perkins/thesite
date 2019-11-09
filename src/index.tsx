import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./components/Home";
import { HashRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={Home} />
        </div>
    </Router>,
    document.getElementById("main"),
);
