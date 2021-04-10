import { useContext } from 'react';
import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from './constants/categories';
import { ExpenseTrackerContext } from './context/context';

const useTransaction = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  const total = transactionsPerType.reduce((acc, c) => (acc += c.amount), 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;
  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
  });
};
