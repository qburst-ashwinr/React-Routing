import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import form from "./components/form";
import output from "./components/output";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/output">Output</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={home} />
      <Route path="/form" component={form} />
      <Route path="/output" component={output} />
    </div>
  </Router>
);
const home = () => <h2>Welcome to the customer forum..</h2>;

export default App;
