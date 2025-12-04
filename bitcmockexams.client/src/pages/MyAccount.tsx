import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

type View = 'dashboard' | 'enrolled' | 'history';

interface EnrolledCourse {
  id: string;
  product: string;
  expires: string;
  cta: string;
}

interface SubscriptionCard {
  id: string;
  title: string;
  color: string; // tailwind bg color
  startDate: string;
  endDate: string;
}

const MyAccount: React.FC = () => {
  const [view, setView] = useState<View>('enrolled');
  const navigate = useNavigate();

  const enrolledCourses: EnrolledCourse[] = useMemo(
    () => [
      {
        id: 'copilot-2025',
        product: 'GitHub Copilot Exam Questions & Dumps 2025',
        expires: 'Never',
        cta: 'Click here to access the Online Exam',
      },
      {
        id: 'az-204-2025',
        product: 'Microsoft Azure Developer (AZ-204) Exam Questions 2025',
        expires: 'Never',
        cta: 'Click here to access your Online Exam',
      },
    ],
    []
  );

  const subscriptions: SubscriptionCard[] = useMemo(
    () => [
      { id: 'pl-100', title: 'PL-100: Microsoft Power Platform App Maker', color: 'bg-purple-400', startDate: 'Sep 18, 2024', endDate: 'Jan 25, 2026' },
      { id: 'ai-900', title: 'AI-900: Azure AI Fundamentals', color: 'bg-red-400', startDate: 'Sep 18, 2024', endDate: 'Jan 25, 2026' },
      { id: 'az-305', title: 'AZ-305: Designing Microsoft Azure Infrastructure Solutions', color: 'bg-green-400', startDate: 'Sep 18, 2024', endDate: 'Jan 25, 2026' },
      { id: 'pl-900', title: 'PL-900: Power Platform Fundamentals', color: 'bg-teal-500', startDate: 'Sep 18, 2024', endDate: 'Jan 25, 2026' },
      { id: 'dp-900', title: 'DP-900: Azure Data Fundamentals', color: 'bg-cyan-600', startDate: 'Sep 18, 2024', endDate: 'Jan 25, 2026' },
      { id: 'dp-203', title: 'DP-203: Data Engineering on Microsoft Azure', color: 'bg-cyan-500', startDate: 'Jul 29, 2024', endDate: 'Jan 25, 2026' },
      { id: 'pl-200', title: 'PL-200: Microsoft Power Platform Functional Consultant', color: 'bg-orange-400', startDate: 'Sep 18, 2024', endDate: 'Jan 25, 2026' },
      { id: 'az-204', title: 'AZ-204: Developing Solutions for Microsoft Azure', color: 'bg-green-500', startDate: 'Sep 18, 2024', endDate: 'Jan 25, 2026' },
      { id: 'az-900', title: 'AZ-900: Microsoft Azure Fundamentals', color: 'bg-green-600', startDate: 'Feb 5, 2024', endDate: 'Jan 25, 2026' },
      { id: 'pl-400', title: 'PL-400: Microsoft Power Platform Developer', color: 'bg-blue-500', startDate: 'Sep 18, 2024', endDate: 'Jan 25, 2026' },
      { id: 'az-104', title: 'AZ-104: Microsoft Azure Administrator', color: 'bg-violet-500', startDate: 'Jul 29, 2024', endDate: 'Jan 25, 2026' },
      { id: 'az-500', title: 'AZ-500: Microsoft Azure Security Technologies', color: 'bg-indigo-500', startDate: 'Sep 18, 2024', endDate: 'Jan 25, 2026' },
    ],
    []
  );

  return (
    <div className="min-h-[calc(100vh-200px)] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow p-4 space-y-2">
              <button
                className={`w-full text-left px-4 py-3 rounded-md border ${view === 'dashboard' ? 'border-green-500 text-green-600 font-semibold bg-green-50' : 'border-gray-200 text-gray-800 bg-white'} hover:bg-green-50`}
                onClick={() => setView('dashboard')}
              >
                Dashboard
              </button>
              {/* <button className="w-full text-left px-4 py-3 rounded-md border border-gray-200 text-gray-800 bg-white">My Orders</button> */}
              <button
                className={`w-full text-left px-4 py-3 rounded-md border ${view === 'enrolled' ? 'border-green-500 text-green-600 font-semibold bg-green-50' : 'border-gray-200 text-gray-800 bg-white'} hover:bg-green-50`}
                onClick={() => setView('enrolled')}
              >
                My Enrolled Courses
              </button>
              {/* <button className="w-full text-left px-4 py-3 rounded-md border border-gray-200 text-gray-800 bg-white">Addresses</button>
              <button className="w-full text-left px-4 py-3 rounded-md border border-gray-200 text-gray-800 bg-white">Account Details</button> */}
              {/* <button className="w-full text-left px-4 py-3 rounded-md border border-gray-200 text-gray-800 bg-white">Logout</button> */}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-9">
            <div className="bg-white rounded-xl shadow p-6">
              {view === 'dashboard' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Downloads</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow p-6">
                      <h3 className="text-lg font-semibold mb-4">My Exam History</h3>
                      <p className="text-sm text-gray-600 mb-4">View your past attempts and detailed results.</p>
                      <Button variant="primary" onClick={() => setView('history')}>Open Exam History</Button>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6">
                      <h3 className="text-lg font-semibold mb-4">My Enrolled Courses</h3>
                      <p className="text-sm text-gray-600 mb-4">Access online exams for enrolled courses.</p>
                      <Button variant="primary" onClick={() => setView('enrolled')}>Open Enrolled Courses</Button>
                    </div>
                  </div>
                </div>
              )}

              {view === 'enrolled' && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-semibold">Subscription</h2>
                  <div className="bg-white rounded-xl shadow overflow-hidden">
                    <div className="grid grid-cols-12 gap-0 border-b px-4 py-3 bg-gray-50">
                      <div className="col-span-6 font-semibold text-gray-700">Courses</div>
                      <div className="col-span-2 font-semibold text-gray-700">Expires</div>
                      <div className="col-span-4 font-semibold text-gray-700">Start to Online Exam</div>
                    </div>
                    {enrolledCourses.map((c, idx) => (
                      <div key={c.id} className={`grid grid-cols-12 gap-0 items-center px-4 py-4 border-b ${idx % 2 ? 'bg-white' : 'bg-gray-50'}`}>
                        <div className="col-span-6 text-green-600 font-medium">{c.product}</div>
                        <div className="col-span-2 text-gray-600">{c.expires}</div>
                        <div className="col-span-4">
                          <button
                            className="w-fit rounded-full bg-green-500 hover:bg-green-600 text-white px-5 py-3 text-sm font-semibold"
                            onClick={() => {
                              const suiteName = c.id === 'copilot-2025' ? 'GitHub Copilot' : 'Microsoft Azure Developer (AZ-204)';
                              const userId = 'user-123';
                              const defaultModuleId = '1';
                              navigate(`/tests/${encodeURIComponent(suiteName)}`);
                              // If you want direct start to practice route instead:
                              // navigate(`/exam/${encodeURIComponent(suiteName)}/${userId}/${defaultModuleId}/practiceQuestions`);
                            }}
                          >
                            {c.cta}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <h2 className="text-2xl font-semibold">Subscription</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subscriptions.map(s => (
                      <div key={s.id} className="rounded-xl shadow bg-white overflow-hidden">
                        <div className={`${s.color} text-white px-6 py-4 font-semibold`}>{s.title}</div>
                        <div className="px-6 py-4 text-sm text-gray-700">
                          <p>Start Date: {s.startDate}</p>
                          <p>End Date: {s.endDate}</p>
                          <div className="mt-3 h-2 w-full rounded bg-gray-200">
                            <div className="h-2 rounded bg-gray-300 w-1/5"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div> */}
                </div>
              )}

              {view === 'history' && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">My Exam History</h2>
                  <p className="text-sm text-gray-600">Select an attempt below to view its detailed results.</p>
                  <HistoryList navigate={navigate} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

// Lightweight inline component to render history attempts list
const HistoryList: React.FC<{ navigate: ReturnType<typeof useNavigate> }> = ({ navigate }) => {
  let attempts: any[] = [];
  try {
    const raw = localStorage.getItem('examHistory');
    attempts = raw ? JSON.parse(raw) : [];
  } catch {
    attempts = [];
  }

  if (!Array.isArray(attempts) || attempts.length === 0) {
    return (
      <div className="p-4 rounded border border-border bg-bg-light text-sm text-gray-700">
        No attempts found. Finish a practice exam to see results here.
      </div>
    );
  }

  const openResult = (item: any) => {
    const suiteName = item.suiteName || 'GitHub Copilot';
    const userId = item.userId || 'user-123';
    const moduleId = String(item.moduleId || '1');
    navigate(`/exam/${encodeURIComponent(suiteName)}/${userId}/${moduleId}/results`, {
      state: {
        suiteName,
        userId,
        moduleId: Number(moduleId),
        score: item.score ?? 0,
        total: item.total ?? (item.results ? item.results.length : 0),
        answeredCount: item.answeredCount ?? (item.results ? item.results.filter((r: any) => r.userAnswer != null).length : 0),
        timeTakenSec: item.timeTakenSec ?? item.time ?? 0,
        results: item.results ?? [],
        marked: item.marked ?? {},
        comments: item.comments ?? {},
      },
    });
  };

  return (
    <div className="space-y-4">
      {attempts.map((item, idx) => {
        const timestamp = item.timestamp || item.date || null;
        const when = timestamp ? new Date(timestamp).toLocaleString() : 'Unknown date';
        const percent = (item.total ? Math.round((item.score / item.total) * 100) : 0) || 0;
        return (
          <div key={idx} className="rounded border border-border p-4 flex items-center justify-between">
            <div className="text-sm">
              <div className="font-semibold text-text-primary">{item.suiteName || 'Exam'}</div>
              <div className="text-gray-600">Module: {item.moduleId ?? '-'}</div>
              <div className="text-gray-600">Score: {item.score ?? 0}/{item.total ?? 0} ({percent}%)</div>
              <div className="text-gray-600">Answered: {item.answeredCount ?? (item.results ? item.results.filter((r: any) => r.userAnswer != null).length : 0)}</div>
              <div className="text-gray-600">When: {when}</div>
            </div>
            <div>
              <button className="rounded-full bg-green-500 hover:bg-green-600 text-white px-5 py-2 text-sm font-semibold" onClick={() => openResult(item)}>
                View Result
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
