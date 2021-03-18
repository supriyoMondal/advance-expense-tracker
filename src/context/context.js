import React, { useReducer, createContext } from 'react';
import { DELETE_TRANSACTIONS, ADD_TRANSACTIONS } from './actionTypes';
import contextReducer from './contextReducer';

const initialState = {
  transactions: [],
};

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  // Action creators
  const deleteTransaction = (id) => {
    dispatch({ type: DELETE_TRANSACTIONS, payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: ADD_TRANSACTIONS, payload: transaction });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        ...state,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
