import React, { PureComponent } from "react";
import classes from "./App.module.css";
import Items from "../components/Items/Items";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

class App extends PureComponent {
  state = {
    items: JSON.parse(localStorage.getItem("items")) || []
  };

  newItemHandler = (itemName, itemAmount) => {
    const items = [...this.state.items];

    const newItem = {
      id: items.length,
      name: itemName,
      amount: itemAmount
    };

    items.push(newItem);

    this.setState(
      {
        items: items
      },
      () => {
        localStorage.setItem("items", JSON.stringify(this.state.items));
      }
    );
  };

  nameChangedHandler = (event, id) => {
    const itemIndex = this.state.items.findIndex(p => {
      return p.id === id;
    });

    const item = {
      ...this.state.items[itemIndex]
    };

    item.name = event.target.value;

    const items = [...this.state.items];
    items[itemIndex] = item;

    this.setState(
      {
        items: items
      },
      () => {
        localStorage.setItem("items", JSON.stringify(this.state.items));
      }
    );
  };

  amountChangedHandler = (event, id) => {
    const itemIndex = this.state.items.findIndex(p => {
      return p.id === id;
    });

    const item = {
      ...this.state.items[itemIndex]
    };

    item.amount = event.target.value;

    const items = [...this.state.items];
    items[itemIndex] = item;

    this.setState(
      {
        items: items
      },
      () => {
        localStorage.setItem("items", JSON.stringify(this.state.items));
      }
    );
  };

  deleteItemHandler = itemIndex => {
    const items = [...this.state.items];
    items.splice(itemIndex, 1);
    this.setState({ items: items }, () => {
      localStorage.setItem("items", JSON.stringify(this.state.items));
    });
  };

  render() {
    let empty = null;

    if (this.state.items.length === 0) {
      empty = <h4>Sua lista está vazia!</h4>;
    }

    return (
      <div className={classes.App}>
        <h2>{this.props.title}</h2>
        {empty}
        <Items
          items={this.state.items}
          btnDeleteEvent={this.deleteItemHandler}
          nameChanged={this.nameChangedHandler}
          amountChanged={this.amountChangedHandler}
        />
        <div className={classes.addButton}>
          <Fab
            variant="extended"
            color="primary"
            onClick={() => this.newItemHandler("", "")}
          >
            Adicionar Item
            <AddIcon />
          </Fab>
        </div>
      </div>
    );
  }
}

export default App;
