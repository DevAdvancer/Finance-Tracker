import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Transaction } from '../types/finance';

interface TransactionFormProps {
  onAddTransaction: (transaction: Transaction) => void;
}

const categories = [
  'Food', 'Transport', 'Shopping', 'Bills', 'Entertainment', 
  'Healthcare', 'Education', 'Salary', 'Investment', 'Other'
];

export default function TransactionForm({ onAddTransaction }: TransactionFormProps) {
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    category: 'Other',
    type: 'expense'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const transaction: Transaction = {
      id: Date.now().toString(),
      amount: Number(formData.amount),
      description: formData.description,
      category: formData.category,
      type: formData.type as 'income' | 'expense',
      date: new Date().toISOString(),
    };
    onAddTransaction(transaction);
    setFormData({ amount: '', description: '', category: 'Other', type: 'expense' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <PlusCircle size={20} />
          Add Transaction
        </button>
      </div>
    </form>
  );
}