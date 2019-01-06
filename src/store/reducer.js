import * as actionTypes from "./actions";

const initialState = {
  // inicializa o array com vazio, ou com o que estiver em cache
  items: JSON.parse(localStorage.getItem("items")) || []
};

const storeItemsInCache = state => {
  // grava o array em cache para uso posterior
  localStorage.setItem("items", JSON.stringify(state.items));
};

const uniqueId = function() {
  // função para criar id único
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
      // cria novo item na lista
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
      // apaga item da lista com base no id
      let newState = Object.assign({}, state);
      const newItems = state.items.filter(item => item.id !== action.itemId);

      newState = {
        items: newItems
      };

      storeItemsInCache(newState);

      return newState;
    }
    case actionTypes.UPDATE_ITEM_NAME: {
      // altera o nome do item da lista com base no id
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
      // altera quantidade/peso do item da lista com base no id
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
