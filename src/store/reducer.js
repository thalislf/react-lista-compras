import * as actionTypes from "./actions";

const initialState = {
  items: JSON.parse(localStorage.getItem("items")) || []
};

const storeItemsInCache = state => {
  localStorage.setItem("items", JSON.stringify(state.items));
};

const uniqueId = function() {
  return (
    "id-" +
    Math.random()
      .toString(36)
      .substr(2, 16)
  );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_ITEM: {
      let newState = Object.assign({}, state);

      const newItem = {
        id: uniqueId(),
        name: "",
        amount: ""
      };

      newState = {
        items: newState.items.concat(newItem)
      };

      storeItemsInCache(newState);

      return newState;
    }
    case actionTypes.DELETE_ITEM: {
      let newState = Object.assign({}, state);
      const newItems = state.items.filter(item => item.id !== action.itemId);

      newState = {
        items: newItems
      };

      storeItemsInCache(newState);

      return newState;
    }
    case actionTypes.UPDATE_ITEM_NAME: {
      let newState = Object.assign({}, state);
      const itemIndex = newState.items.findIndex(p => {
        return p.id === action.itemId;
      });

      const item = {
        ...newState.items[itemIndex]
      };

      item.name = action.itemName;

      const items = [...newState.items];

      items[itemIndex] = item;

      newState.items = items;

      storeItemsInCache(newState);

      return newState;
    }
    case actionTypes.UPDATE_ITEM_AMOUNT: {
      let newState = Object.assign({}, state);
      const itemIndex = newState.items.findIndex(p => {
        return p.id === action.itemId;
      });

      const item = {
        ...newState.items[itemIndex]
      };

      item.amount = action.itemAmount;

      const items = [...newState.items];

      items[itemIndex] = item;

      newState.items = items;

      storeItemsInCache(newState);

      return newState;
    }
    default:
      break;
  }

  return state;
};

export default reducer;
