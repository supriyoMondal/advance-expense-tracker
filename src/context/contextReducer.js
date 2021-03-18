import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from './actionTypes';

export default function contextReducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case DELETE_TRANSACTIONS:
      return {
        ...state,
        transactions: state.transactions.filter((i) => i.id !== payload),
      };
    case ADD_TRANSACTIONS:
      return { ...state, transactions: [payload, ...state.transactions] };
    default:
      return state;
  }
}
