import React, { PureComponent } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Item from "./Item/Item";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import classes from "./Items.module.css";

class Items extends PureComponent {
  render() {
    let empty = null;

    if (this.props.itm.length === 0) {
      // verifica se o array de itens está vazio
      empty = <h4>Sua lista está vazia!</h4>;
    }

    return (
      <div>
        <div className={classes.addButton}>
          <Fab
            size="small"
            variant="extended"
            color="primary"
            onClick={this.props.onAddNewItem}
          >
            Adicionar Item
            <AddIcon />
          </Fab>
        </div>
        {empty}
        {this.props.itm.map(item => (
          <ErrorBoundary key={item.id}>
            <Item
              name={item.name}
              amount={item.amount}
              key={item.id}
              nChanged={event =>
                this.props.onItemNameChange(event.target.value, item.id)
              }
              aChanged={event =>
                this.props.onItemAmountChange(event.target.value, item.id)
              }
              btnDelete={() => this.props.onDeleteItem(item.id)}
            />
          </ErrorBoundary>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // mapeia o array que está no store para props
  return {
    itm: state.items
  };
};

const mapDispatchToProps = dispatch => {
  // mapeia funções do reducer para props
  return {
    onAddNewItem: () => dispatch({ type: actionTypes.NEW_ITEM }),
    onDeleteItem: id => dispatch({ type: actionTypes.DELETE_ITEM, itemId: id }),
    onItemNameChange: (name, id) =>
      dispatch({
        type: actionTypes.UPDATE_ITEM_NAME,
        itemName: name,
        itemId: id
      }),
    onItemAmountChange: (amount, id) =>
      dispatch({
        type: actionTypes.UPDATE_ITEM_AMOUNT,
        itemAmount: amount,
        itemId: id
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
