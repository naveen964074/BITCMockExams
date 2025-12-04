import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { suiteModules } from '../data/mockData';

interface ModuleItem {
  id: number;
  title: string;
  description: string;
  questions: number;
  durationMins: number;
}

const getModulesBySuite = (suiteName: string): ModuleItem[] => suiteModules[suiteName] ?? [];

const TestSuite: React.FC = () => {
  const { suiteName } = useParams();
  const navigate = useNavigate();
  const suite = suiteName ? decodeURIComponent(suiteName) : 'Suite';
  const modules = getModulesBySuite(suite);

  return (
    <div className="min-h-[calc(100vh-200px)]">
      <div className="border-b border-border bg-bg-light">
        <div className="container mx-auto px-4 py-3 text-sm">
          <Link to="/" className="text-primary-blue no-underline">Home</Link>
          <span className="mx-2 text-text-light">/</span>
          <Link to="/mock-exams" className="text-primary-blue no-underline">Mock exams</Link>
          <span className="mx-2 text-text-light">/</span>
          <span className="text-text-primary font-semibold">{suite}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="flex flex-col gap-4">
          <Card>
            <h1 className="text-2xl font-bold m-0">{suite}</h1>
          </Card>

          {modules.map((m, idx) => (
            <Card key={m.id}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold m-0 mb-1">{idx + 1}. {m.title}</h2>
                  <p className="text-text-secondary m-0">{m.description}</p>
                  <div className="flex items-center gap-6 mt-3 text-sm text-text-secondary">
                    <span>✍️ Questions {m.questions}</span>
                    <span>⏱️ {m.durationMins} Mins</span>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button
                    variant="secondary"
                    onClick={() => navigate(`/exam/${encodeURIComponent(suite)}/${encodeURIComponent('user-123')}/${m.id}/practiceQuestions`)}
                  >
                    Start
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <Card>
            <div>
              <h3 className="text-base font-semibold m-0 mb-2">Users Rating ⭐⭐⭐⭐⭐</h3>
              <p className="text-sm text-text-secondary m-0">Average 4 rating based on 30 reviews.</p>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center gap-2"><span>5 star</span><div className="flex-1 h-2 bg-bg-light rounded"><div className="h-2 w-2/3 bg-warning rounded"></div></div><span>67%</span></div>
                <div className="flex items-center gap-2"><span>4 star</span><div className="flex-1 h-2 bg-bg-light rounded"><div className="h-2 w-1/5 bg-warning rounded"></div></div><span>20%</span></div>
                <div className="flex items-center gap-2"><span>3 star</span><div className="flex-1 h-2 bg-bg-light rounded"><div className="h-2 w-[7%] bg-warning rounded"></div></div><span>7%</span></div>
                <div className="flex items-center gap-2"><span>2 star</span><div className="flex-1 h-2 bg-bg-light rounded"><div className="h-2 w-0 bg-warning rounded"></div></div><span>0%</span></div>
                <div className="flex items-center gap-2"><span>1 star</span><div className="flex-1 h-2 bg-bg-light rounded"><div className="h-2 w-[7%] bg-warning rounded"></div></div><span>7%</span></div>
              </div>
            </div>
          </Card>

          <Card>
            <div>
              <h3 className="text-base font-semibold m-0 mb-2">Top Users</h3>
              <div className="flex items-center gap-3 p-2 rounded bg-bg-light">
                <div className="w-8 h-8 rounded-full bg-border"></div>
                <div className="text-sm">lalith</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestSuite;
