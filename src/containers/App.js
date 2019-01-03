import React, { PureComponent } from "react";
import classes from "./App.module.css";
import Items from "../components/Items/Items";

class App extends PureComponent {
  render() {
    return (
      <div className={classes.App}>
        <h2>{this.props.title}</h2>
        <Items />
      </div>
    );
  }
}

export default App;
