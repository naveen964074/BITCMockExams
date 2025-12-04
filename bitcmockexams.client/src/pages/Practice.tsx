import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { suiteQuestions } from '../data/mockData';

interface Question {
  id: number;
  domain: string;
  prompt: string;
  scenario?: string;
  options: { key: string; text: string }[];
  correct: string; // e.g., 'A'
  explanation?: string;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    domain: 'Identify common types of computer vision solution',
    prompt: 'Match the types of computer vision workloads to the following scenario.',
    scenario: 'Generate captions for images',
    options: [
      { key: 'A', text: 'Image classification' },
      { key: 'B', text: 'Object detection' },
      { key: 'C', text: 'Optical character recognition (OCR)' },
    ],
    correct: 'A',
  },
];

const Practice: React.FC = () => {
  const { suiteName, userId, moduleId } = useParams();
  const navigate = useNavigate();

  const [time, setTime] = useState(0); // seconds
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [marked, setMarked] = useState<Record<number, boolean>>({});
  const [comments, setComments] = useState<Record<number, string>>({});

  const questions = useMemo(() => {
    const suite = suiteName ? decodeURIComponent(suiteName) : '';
    const modId = moduleId ? Number(moduleId) : 0;
    const fromData = suite && modId ? suiteQuestions[suite]?.[modId] ?? [] : [];
    // Fallback to sample if no data
    return fromData.length ? fromData : sampleQuestions;
  }, [suiteName, moduleId]);
  const total = questions.length;
  const current = questions[currentIndex];

  useEffect(() => {
    const t = setInterval(() => setTime((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const formatTime = (s: number) => {
    const mm = String(Math.floor(s / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  };

  const onSelect = (key: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: key }));
  };

  const onPrev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
    setShowAnswer(false);
  };

  const onNext = () => {
    setCurrentIndex((i) => Math.min(total - 1, i + 1));
    setShowAnswer(false);
  };

  const onJump = (index: number) => {
    setCurrentIndex(index);
    setShowAnswer(false);
  };

  const onToggleMark = () => {
    setMarked((prev) => ({ ...prev, [current.id]: !prev[current.id] }));
  };

  const onFinish = () => {
    // Compute score and navigate to results with summary state
    const answeredCount = Object.keys(answers).length;
    const results = questions.map((q) => {
      const userAnswer = answers[q.id];
      const isCorrect = userAnswer === q.correct;
      return {
        id: q.id,
        domain: q.domain,
        prompt: q.prompt,
        scenario: q.scenario,
        options: q.options,
        correct: q.correct,
        userAnswer,
        isCorrect,
        explanation: q.explanation,
      };
    });
    const score = results.filter((r) => r.isCorrect).length;
    const total = results.length;
    const suite = suiteName ? decodeURIComponent(suiteName) : '';
    const uid = userId ?? 'unknown';
    const modId = moduleId ?? '0';
    navigate(`/exam/${suite}/${uid}/${modId}/results`, {
      state: {
        suiteName: suite,
        userId: uid,
        moduleId: Number(modId),
        score,
        total,
        answeredCount,
        timeTakenSec: time,
        results,
        marked,
        comments,
      },
      replace: false,
    });
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-white">
      {/* Breadcrumb + Header */}
      <div className="border-b border-border bg-bg-light">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-sm">
            <Link to="/" className="text-primary-blue no-underline">Home</Link>
            <span className="mx-2 text-text-light">/</span>
            <Link to="/tests" className="text-primary-blue no-underline">Tests</Link>
            <span className="mx-2 text-text-light">/</span>
            <span className="text-text-primary font-semibold">{suiteName}</span>
            <span className="mx-2 text-text-light">/</span>
            <span className="text-text-primary">Practice</span>
          </div>
          <div className="text-sm font-semibold">Time: {formatTime(time)}</div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        {/* Left: Question */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold">{suiteName} (Practice)</h1>
            <div className="text-sm">Question: {String(currentIndex + 1).padStart(2, '0')} of {String(total).padStart(2, '0')}</div>
          </div>

          <div className="mb-4 text-sm text-text-secondary">Domain: {current.domain}</div>
          <div className="mb-4">
            <p className="m-0">{current.prompt}</p>
          </div>
          {current.scenario && (
            <div className="mb-4">
              <p className="m-0"><span className="font-semibold">Scenario:</span></p>
              <p className="m-0 font-semibold">{current.scenario}</p>
            </div>
          )}

          <div className="flex flex-col gap-3 mb-4">
            {current.options.map((opt) => {
              const selected = answers[current.id] === opt.key;
              return (
                <label key={opt.key} className="flex items-center gap-3 cursor-pointer p-3 rounded border border-border hover:bg-light-blue">
                  <input
                    type="radio"
                    name={`q-${current.id}`}
                    checked={selected}
                    onChange={() => onSelect(opt.key)}
                  />
                  <span><span className="font-semibold mr-2">{opt.key}.</span> {opt.text}</span>
                </label>
              );
            })}
          </div>

          <div className="mb-4 text-center">
            <button className="text-primary-blue font-semibold bg-transparent border-none cursor-pointer" onClick={() => setShowAnswer((s) => !s)}>
              {showAnswer ? 'Hide Answer (-)' : 'Show Answer (+)'}
            </button>
          </div>
          {showAnswer && (
            <div className="mb-4 p-3 rounded bg-bg-light border border-border">
              <span className="font-semibold">Correct Answer:</span> {current.correct}
            </div>
          )}

          <div className="mb-4">
            <textarea
              placeholder="Enter your comment here..."
              value={comments[current.id] || ''}
              onChange={(e) => setComments((prev) => ({ ...prev, [current.id]: e.target.value }))}
              className="w-full px-4 py-3 bg-white border-2 border-border rounded-md"
              rows={3}
            />
            <div className="text-right mt-2">
              <button className="text-primary-blue font-semibold bg-transparent border-none cursor-pointer">Submit</button>
            </div>
          </div>

          {/* Prev / Next / Finish */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="small" onClick={onPrev} disabled={currentIndex === 0}>{'<<'}</Button>
              <Button variant="outline" size="small" onClick={onNext} disabled={currentIndex === total - 1}>{'>>'}</Button>
            </div>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={!!marked[current.id]} onChange={onToggleMark} />
                <span>Mark for Review</span>
              </label>
              <Button variant="secondary" size="small" onClick={onFinish}>Finish</Button>
            </div>
          </div>
        </Card>

        {/* Right: Navigator */}
        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold m-0">Navigator</h3>
            <span className="text-sm text-text-secondary">Total: {total}</span>
          </div>
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
            {questions.map((q, idx) => {
              const isCurrent = idx === currentIndex;
              const isAnswered = !!answers[q.id];
              const isMarked = !!marked[q.id];
              const base = 'w-9 h-9 flex items-center justify-center rounded border cursor-pointer';
              const styles = [
                base,
                isCurrent ? 'border-primary-blue text-primary-blue font-bold' : 'border-border text-text-primary',
                isAnswered ? 'bg-light-blue' : 'bg-white',
                isMarked ? 'ring-2 ring-warning' : '',
              ].join(' ');
              return (
                <button key={q.id} className={styles} onClick={() => onJump(idx)} aria-label={`Question ${idx + 1}`}>
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Practice;
