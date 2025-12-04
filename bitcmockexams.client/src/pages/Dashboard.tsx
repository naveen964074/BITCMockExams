import React from 'react';
import { Link } from 'react-router-dom';
import { FaWallet, FaHistory, FaUserCircle } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>
        <p className="text-text-secondary mb-8">Welcome back! Access your account shortcuts below.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <Link to="/wallet" className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-3">
              <FaWallet className="text-primary-blue text-2xl" />
              <h2 className="text-xl font-semibold m-0">My Wallet</h2>
            </div>
            <p className="text-text-secondary m-0">View balance, transactions, and payments.</p>
          </Link> */}

          <Link to="/results" className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-3">
              <FaHistory className="text-primary-blue text-2xl" />
              <h2 className="text-xl font-semibold m-0">My Exam History</h2>
            </div>
            <p className="text-text-secondary m-0">See past attempts and scores.</p>
          </Link>

          <Link to="/my-account" className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-3">
              <FaUserCircle className="text-primary-blue text-2xl" />
              <h2 className="text-xl font-semibold m-0">My Account</h2>
            </div>
            <p className="text-text-secondary m-0">Manage profile and preferences.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
