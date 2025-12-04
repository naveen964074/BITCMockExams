import React from 'react';

const ExamHistory: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">My Exam History</h1>
        <div className="bg-white border border-border rounded-lg p-6">
          <p className="text-text-secondary">No exam history yet. Start a mock exam to see your progress here.</p>
        </div>
      </div>
    </section>
  );
};

export default ExamHistory;
