export const initialState = {
  basket: [],
};


// Selector
// .reduce() maps through the basket
// Here we use reduce to add each item price to the total amount, with the total starting at 0
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
