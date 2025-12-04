import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface ResultItem {
  id: number;
  domain: string;
  prompt: string;
  scenario?: string;
  options: { key: string; text: string }[];
  correct: string;
  userAnswer?: string;
  isCorrect: boolean;
  explanation?: string;
}

const Results: React.FC = () => {
  const location = useLocation();
  const { suiteName } = useParams();
  const state = location.state as {
    suiteName: string;
    userId: string;
    moduleId: number;
    score: number;
    total: number;
    answeredCount: number;
    timeTakenSec: number;
    results: ResultItem[];
    marked: Record<number, boolean>;
    comments: Record<number, string>;
  } | null;

  const suite = suiteName ? decodeURIComponent(suiteName) : '';

  if (!state) {
    return (
      <div className="container mx-auto px-4 py-6">
        <Card>
          <h1 className="text-xl font-bold mb-2">Results</h1>
          <p className="m-0">No results data found. Please complete a practice test first.</p>
          <div className="mt-4">
            <Link to={`/tests/${suite}`} className="text-primary-blue">Back to Test Suite</Link>
          </div>
        </Card>
      </div>
    );
  }

  const { score, total, answeredCount, timeTakenSec, results } = state;
  const formatTime = (s: number) => {
    const mm = String(Math.floor(s / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  };

  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  const accuracy = total > 0 ? Math.round((score / answeredCount) * 100) : 0;

  const Donut: React.FC<{ value: number; label: string; color?: string }> = ({ value, label, color = '#22c55e' }) => {
    const size = 120;
    const stroke = 12;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const clamped = Math.max(0, Math.min(100, value));
    const offset = circumference - (clamped / 100) * circumference;
    return (
      <div className="flex flex-col items-center">
        <svg width={size} height={size} className="block">
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={stroke} fill="none" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-current" style={{ fontSize: 18 }}>
            {clamped}%
          </text>
        </svg>
        <div className="mt-2 text-sm font-semibold text-text-primary">{label}</div>
      </div>
    );
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-bg-light">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-sm">
            <Link to="/" className="text-primary-blue no-underline">Home</Link>
            <span className="mx-2 text-text-light">/</span>
            <Link to="/tests" className="text-primary-blue no-underline">Tests</Link>
            <span className="mx-2 text-text-light">/</span>
            <span className="text-text-primary font-semibold">{suite}</span>
            <span className="mx-2 text-text-light">/</span>
            <span className="text-text-primary">Results</span>
          </div>
          <div className="text-sm font-semibold">Time: {formatTime(timeTakenSec)}</div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Summary Header */}
        <Card>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div>
              <h1 className="text-2xl font-bold m-0">Results Summary</h1>
              <div className="mt-1 text-sm text-text-secondary">Suite: {suite}</div>
              <div className="mt-1 text-sm text-text-secondary">Time: {formatTime(timeTakenSec)}</div>
            </div>
            <div className="flex items-center justify-center gap-10">
              <Donut value={percent} label="Score" color="#22c55e" />
              <Donut value={Math.max(0, Math.min(100, accuracy || percent))} label="Accuracy" color="#3b82f6" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded border border-border p-3">
                <div className="text-text-secondary">Score</div>
                <div className="font-semibold">{score} / {total}</div>
              </div>
              <div className="rounded border border-border p-3">
                <div className="text-text-secondary">Answered</div>
                <div className="font-semibold">{answeredCount}</div>
              </div>
              <div className="rounded border border-border p-3">
                <div className="text-text-secondary">Percent</div>
                <div className="font-semibold">{percent}%</div>
              </div>
              <div className="rounded border border-border p-3">
                <div className="text-text-secondary">Duration</div>
                <div className="font-semibold">{formatTime(timeTakenSec)}</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Detailed Explanations */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold m-0">Detailed Explanations</h2>
            <div className="text-sm">Score: {score}/{total} ({percent}%)</div>
          </div>
          <div className="text-sm text-text-secondary mb-4">Answered: {answeredCount} of {total}</div>

          <div className="space-y-4">
            {results.map((r, idx) => (
              <div key={r.id} className="p-4 rounded border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold">Question {idx + 1}</div>
                  <span className={r.isCorrect ? 'text-success font-semibold' : 'text-danger font-semibold'}>
                    {r.isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
                <div className="text-sm text-text-secondary mb-2">Domain: {r.domain}</div>
                <p className="m-0 mb-3">{r.prompt}</p>
                {r.scenario && (
                  <div className="mb-3">
                    <div className="font-semibold">Scenario</div>
                    <p className="m-0 text-sm text-text-secondary">{r.scenario}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div className="rounded p-3 bg-bg-light border border-border">
                    <div className="font-semibold mb-1">Your Answer</div>
                    <div className="text-sm">{r.userAnswer ?? '-'}</div>
                  </div>
                  <div className="rounded p-3 bg-bg-light border border-border">
                    <div className="font-semibold mb-1">Correct Answer</div>
                    <div className="text-sm">{r.correct}</div>
                  </div>
                </div>

                <div className="p-3 rounded bg-bg-light border border-border">
                  <div className="font-semibold mb-1">Explanation</div>
                  <p className="m-0 text-sm">{r.explanation || 'No explanation provided for this question.'}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Link to={`/tests/${suite}`} className="text-primary-blue no-underline">Back to Test Suite</Link>
            <Button variant="secondary" size="small" onClick={() => window.location.reload()}>Retake</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Results;
