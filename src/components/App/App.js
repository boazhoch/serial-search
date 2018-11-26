import React, { Component } from "react";
import logo from "../../logo-amirim_2x.png";
import styles from "./App.module.css";

import SearchBar from "../search-bar/search-bar";

class App extends Component {
  render() {
    return (
      <div className={styles["App"]}>
        <header className={styles["Header"]}>
          <img src={logo} className={styles["App-logo"]} alt="logo" />
        </header>
        <SearchBar />
      </div>
    );
  }
}

export default App;
