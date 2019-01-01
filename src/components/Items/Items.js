import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Item from "./Item/Item";

const Items = props => {
  return props.items.map((item, index) => {
    return (
      <ErrorBoundary key={item.id}>
        <Item
          name={item.name}
          amount={item.amount}
          key={item.id}
          nChanged={event => props.nameChanged(event, item.id)}
          aChanged={event => props.amountChanged(event, item.id)}
          btnDelete={() => props.btnDeleteEvent(index)}
        />
      </ErrorBoundary>
    );
  });
};

export default Items;
