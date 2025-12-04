import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import MockExams from './pages/MockExams';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ExamHistory from './pages/ExamHistory';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Practice from './pages/Practice';
import TestSuite from './pages/TestSuite';
import Results from './pages/Results';
import MyAccount from './pages/MyAccount';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Routes with Layout */}
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/mock-exams" element={<Layout><MockExams /></Layout>} />
                <Route path="/tests/:suiteName" element={<ProtectedRoute><Layout><TestSuite /></Layout></ProtectedRoute>} />
                {/* Legacy route placeholder removed; use paramed exam route below */}
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/dashboard" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
                <Route path="/exam-history" element={<ProtectedRoute><Layout><ExamHistory /></Layout></ProtectedRoute>} />
                <Route path="/exam/:suiteName/:userId/:moduleId/practiceQuestions" element={<ProtectedRoute><Layout><Practice /></Layout></ProtectedRoute>} />
                <Route path="/exam/:suiteName/:userId/:moduleId/results" element={<ProtectedRoute><Layout><Results /></Layout></ProtectedRoute>} />
                <Route path="/my-account" element={<ProtectedRoute><Layout><MyAccount /></Layout></ProtectedRoute>} />
                <Route path="/results" element={<ProtectedRoute><Layout><Results /></Layout></ProtectedRoute>} />

                {/* Auth Routes (no header/footer) */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
