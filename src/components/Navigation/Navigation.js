import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/code" component={Code} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/presence" component={info} />
  }
}

export default App;
