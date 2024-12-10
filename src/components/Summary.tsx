import React from 'react';
import { TransactionSummary } from '../types/finance';
import { formatCurrency } from '../utils/storage';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

interface SummaryProps {
  summary: TransactionSummary;
}

export default function Summary({ summary }: SummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Income</p>
            <p className="text-2xl font-semibold text-green-600">{formatCurrency(summary.totalIncome)}</p>
          </div>
          <TrendingUp className="h-8 w-8 text-green-600" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Expenses</p>
            <p className="text-2xl font-semibold text-red-600">{formatCurrency(summary.totalExpense)}</p>
          </div>
          <TrendingDown className="h-8 w-8 text-red-600" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Current Balance</p>
            <p className="text-2xl font-semibold text-blue-600">{formatCurrency(summary.balance)}</p>
          </div>
          <Wallet className="h-8 w-8 text-blue-600" />
        </div>
      </div>
    </div>
  );
}