import { Transaction } from '../types/finance';

const STORAGE_KEY = 'finance_tracker_data';

export const saveTransactions = (transactions: Transaction[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
};

export const getTransactions = (): Transaction[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};