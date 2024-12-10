import React, { useState, useEffect } from 'react';
import { IndianRupee } from 'lucide-react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import Footer from './components/Footer';
import { Transaction, TransactionSummary } from './types/finance';
import { saveTransactions, getTransactions } from './utils/storage';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const savedTransactions = getTransactions();
    setTransactions(savedTransactions);
  }, []);

  const calculateSummary = (): TransactionSummary => {
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpense = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense
    };
  };

  const handleAddTransaction = (transaction: Transaction) => {
    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
    saveTransactions(updatedTransactions);
  };

  const handleDeleteTransaction = (id: string) => {
    const updatedTransactions = transactions.filter(t => t.id !== id);
    setTransactions(updatedTransactions);
    saveTransactions(updatedTransactions);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <header className="bg-white shadow-md py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <IndianRupee className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900 ml-2">Finance Tracker</h1>
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          <Summary summary={calculateSummary()} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <TransactionForm onAddTransaction={handleAddTransaction} />
            </div>
            
            <div className="lg:col-span-2">
              <TransactionList 
                transactions={transactions} 
                onDeleteTransaction={handleDeleteTransaction}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
}

export default App;