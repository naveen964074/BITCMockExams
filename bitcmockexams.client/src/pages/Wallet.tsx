import React from 'react';

const Wallet: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">My Wallet</h1>
        <div className="bg-white border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-text-secondary">Current Balance</span>
            <span className="text-2xl font-bold text-primary-blue">$0.00</span>
          </div>
          <div className="text-text-secondary">No transactions yet.</div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
