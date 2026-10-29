import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MOCK_TESTS_DATA } from '../data/mockTestsData';
import {
  Clock,
  Award,
  CheckCircle,
  XCircle,
  HelpCircle,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Play,
  Check,
  Sparkles,
  BarChart3,
  BookmarkCheck
} from 'lucide-react';

export default function MockTestsSection() {
  const { showToast } = useApp();

  // Test Selection state
  const [selectedTest, setSelectedTest] = useState(MOCK_TESTS_DATA[0]);
  const [isTestActive, setIsTestActive] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);

  // Active Test Engine state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [qId]: selectedOptionIndex }
  const [markedForReview, setMarkedForReview] = useState({}); // { [qId]: boolean }
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(600); // 10 mins
  const [timerInterval, setTimerInterval] = useState(null);

  // Review mode toggle after finish
  const [reviewTab, setReviewTab] = useState('all'); // 'all', 'incorrect', 'correct'

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isTestActive && !isTestFinished && timeLeftSeconds > 0) {
      interval = setInterval(() => {
        setTimeLeftSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTestActive, isTestFinished, timeLeftSeconds]);

  const handleStartTest = (test) => {
    setSelectedTest(test);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setTimeLeftSeconds(test.durationMinutes * 60);
    setIsTestActive(true);
    setIsTestFinished(false);
    showToast(`Test started! You have ${test.durationMinutes} minutes. Best of luck!`, 'info');
  };

  const handleSelectOption = (questionId, optionIndex) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleClearResponse = (questionId) => {
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  const handleToggleReview = (questionId) => {
    setMarkedForReview((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleAutoSubmit = () => {
    showToast("Time's up! Your mock test has been submitted automatically.", 'info');
    setIsTestActive(false);
    setIsTestFinished(true);
  };

  const handleSubmitTest = () => {
    const answeredCount = Object.keys(userAnswers).length;
    const totalQ = selectedTest.questions.length;

    if (answeredCount < totalQ) {
      const confirmSubmit = window.confirm(
        `You have answered ${answeredCount} out of ${totalQ} questions. Are you sure you want to submit?`
      );
      if (!confirmSubmit) return;
    }

    setIsTestActive(false);
    setIsTestFinished(true);
    showToast('Mock test submitted successfully! Generating scorecard...', 'success');
  };

  // Score Calculation
  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    selectedTest.questions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (ans === undefined) {
        unattempted++;
      } else if (ans === q.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const maxMarks = selectedTest.questions.length * selectedTest.positiveMarks;
    const score = (correct * selectedTest.positiveMarks) - (incorrect * selectedTest.negativeMarks);
    const accuracy = correct + incorrect > 0 ? ((correct / (correct + incorrect)) * 100).toFixed(1) : '0';
    const finalScore = Math.max(0, parseFloat(score.toFixed(2)));

    return {
      correct,
      incorrect,
      unattempted,
      maxMarks,
      score: finalScore,
      accuracy,
      timeTakenFormatted: formatTime((selectedTest.durationMinutes * 60) - timeLeftSeconds)
    };
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = selectedTest.questions[currentQuestionIndex];
  const results = isTestFinished ? calculateResults() : null;

  return (
    <section id="mock-tests-section" className="py-12 lg:py-16 bg-slate-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        {!isTestActive && !isTestFinished && (
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-saffron-600" />
              <span>Interactive Exam Simulation Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              Practice Mock Tests & Live Quizzes
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              Experience the actual exam hall interface with real-time timers, negative marking calculations, and in-depth question explanations.
            </p>
          </div>
        )}

        {/* 1. TEST SELECTION VIEW */}
        {!isTestActive && !isTestFinished && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_TESTS_DATA.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-navy-50 text-navy-800 border border-navy-100 font-bold uppercase text-[10px]">
                      {test.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-saffron-600" />
                      {test.durationMinutes} Mins
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg leading-snug mb-2">
                    {test.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                    {test.description}
                  </p>

                  <div className="space-y-2 py-3 border-t border-b border-slate-100 text-xs text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Target Exam:</span>
                      <span className="font-semibold">{test.targetExam}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Total Questions:</span>
                      <span className="font-semibold">{test.totalQuestions} MCQs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Marking Scheme:</span>
                      <span className="font-semibold text-emerald-700">+{test.positiveMarks} / -{test.negativeMarks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Difficulty:</span>
                      <span className="font-semibold text-amber-700">{test.difficulty}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleStartTest(test)}
                  className="mt-5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>Start Mock Test</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 2. ACTIVE TEST ENGINE (TCS iON / CBT Style) */}
        {isTestActive && currentQ && (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-300 overflow-hidden">

            {/* Top Bar with Timer and Progress */}
            <div className="bg-navy-900 text-white p-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 border-b border-navy-800">
              <div>
                <span className="text-xs uppercase tracking-wider text-saffron-400 font-bold">
                  {selectedTest.category} Exam Simulation
                </span>
                <h3 className="font-bold text-base sm:text-lg text-white">
                  {selectedTest.title}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                {/* Timer Box */}
                <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm ${timeLeftSeconds < 120
                    ? 'bg-red-500/20 border-red-500 text-red-300 animate-pulse'
                    : 'bg-navy-800 border-navy-700 text-saffron-400'
                  }`}>
                  <Clock className="w-4 h-4" />
                  <span>{formatTime(timeLeftSeconds)}</span>
                </div>

                <button
                  onClick={handleSubmitTest}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  Submit Test
                </button>
              </div>
            </div>

            {/* Test Body: Question Area (left) + Question Palette (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">

              {/* Question & Options Area */}
              <div className="lg:col-span-8 p-5 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
                <div>
                  {/* Question Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Question {currentQuestionIndex + 1} of {selectedTest.questions.length}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      +{selectedTest.positiveMarks} / -{selectedTest.negativeMarks} Marks
                    </span>
                  </div>

                  {/* Question Text */}
                  <div className="font-semibold text-slate-900 text-base sm:text-lg mb-6 leading-relaxed">
                    {currentQ.question}
                  </div>

                  {/* MCQ Options */}
                  <div className="space-y-3">
                    {currentQ.options.map((option, idx) => {
                      const isSelected = userAnswers[currentQ.id] === idx;
                      const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D
                      return (
                        <div
                          key={idx}
                          onClick={() => handleSelectOption(currentQ.id, idx)}
                          className={`p-3.5 sm:p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-3.5 ${isSelected
                              ? 'border-saffron-500 bg-saffron-50/70 shadow-sm text-slate-900'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                            }`}
                        >
                          <div className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isSelected
                              ? 'bg-saffron-500 text-white'
                              : 'bg-slate-200 text-slate-600'
                            }`}>
                            {optionLetter}
                          </div>
                          <div className="text-xs sm:text-sm font-medium leading-relaxed">
                            {option}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Question Actions (Clear, Review, Next/Prev) */}
                <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleClearResponse(currentQ.id)}
                      disabled={userAnswers[currentQ.id] === undefined}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-xs font-medium text-slate-600 disabled:opacity-40"
                    >
                      Clear Response
                    </button>
                    <button
                      onClick={() => handleToggleReview(currentQ.id)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${markedForReview[currentQ.id]
                          ? 'bg-purple-100 border-purple-300 text-purple-800 font-bold'
                          : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                        }`}
                    >
                      {markedForReview[currentQ.id] ? 'Marked for Review ★' : 'Mark for Review'}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                      disabled={currentQuestionIndex === 0}
                      className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-1 disabled:opacity-40"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>

                    {currentQuestionIndex < selectedTest.questions.length - 1 ? (
                      <button
                        onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                        className="px-4 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold flex items-center gap-1 shadow-sm"
                      >
                        <span>Save & Next</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmitTest}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Submit Test</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>

              {/* Question Navigation Palette (Right Column) */}
              <div className="lg:col-span-4 p-5 sm:p-6 bg-slate-50 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-3">
                    Question Palette
                  </h4>

                  {/* Legend */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] mb-4 p-2.5 rounded-xl bg-white border border-slate-200">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                      <span>Answered</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                      <span>Marked Review</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                      <span>Not Answered</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full border-2 border-saffron-500 bg-white"></span>
                      <span>Current</span>
                    </div>
                  </div>

                  {/* Number buttons grid */}
                  <div className="grid grid-cols-5 gap-2">
                    {selectedTest.questions.map((q, idx) => {
                      const isAnswered = userAnswers[q.id] !== undefined;
                      const isReview = markedForReview[q.id];
                      const isCurrent = currentQuestionIndex === idx;

                      let btnStyle = 'bg-slate-200 text-slate-700 border-slate-200';
                      if (isAnswered && !isReview) {
                        btnStyle = 'bg-emerald-500 text-white font-bold border-emerald-600';
                      } else if (isReview) {
                        btnStyle = 'bg-purple-600 text-white font-bold border-purple-700';
                      }
                      if (isCurrent) {
                        btnStyle += ' ring-2 ring-saffron-500 ring-offset-2';
                      }

                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQuestionIndex(idx)}
                          className={`h-9 rounded-lg text-xs font-semibold transition-all border ${btnStyle}`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-center">
                  <button
                    onClick={handleSubmitTest}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all"
                  >
                    Final Test Submission
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 3. POST-TEST RESULTS & SCORECARD DISPLAY */}
        {isTestFinished && results && (
          <div className="space-y-6">

            {/* Scorecard Hero Banner */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-navy-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="space-y-2 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/20 text-saffron-400 text-xs font-bold border border-saffron-500/30">
                    <Award className="w-4 h-4" />
                    <span>Test Completed & Evaluated</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedTest.title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    Comprehensive performance analysis with negative marking applied.
                  </p>
                </div>

                {/* Big Score Box */}
                <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <div className="text-center">
                    <div className="text-xs uppercase text-slate-300 font-semibold">Your Score</div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-saffron-400">
                      {results.score}
                    </div>
                    <div className="text-[11px] text-slate-400">Out of {results.maxMarks} Marks</div>
                  </div>
                  <div className="h-10 w-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-xs uppercase text-slate-300 font-semibold">Accuracy</div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
                      {results.accuracy}%
                    </div>
                    <div className="text-[11px] text-slate-400">Time: {results.timeTakenFormatted}</div>
                  </div>
                </div>

              </div>

              {/* Stats Summary Row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 pt-6 border-t border-white/10 text-center">
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-400">{results.correct}</div>
                  <div className="text-xs text-slate-300 font-medium">Correct (+{selectedTest.positiveMarks})</div>
                </div>
                <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30">
                  <div className="text-lg sm:text-xl font-extrabold text-red-400">{results.incorrect}</div>
                  <div className="text-xs text-slate-300 font-medium">Incorrect (-{selectedTest.negativeMarks})</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-500/20 border border-slate-500/30">
                  <div className="text-lg sm:text-xl font-extrabold text-slate-300">{results.unattempted}</div>
                  <div className="text-xs text-slate-300 font-medium">Unattempted (0)</div>
                </div>
              </div>
            </div>

            {/* Actions & Question Review Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-800 text-sm">Review Questions:</span>
                <div className="flex items-center gap-1 text-xs">
                  <button
                    onClick={() => setReviewTab('all')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${reviewTab === 'all' ? 'bg-navy-900 text-white font-bold' : 'bg-slate-100 text-slate-600'
                      }`}
                  >
                    All ({selectedTest.questions.length})
                  </button>
                  <button
                    onClick={() => setReviewTab('incorrect')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${reviewTab === 'incorrect' ? 'bg-red-600 text-white font-bold' : 'bg-slate-100 text-slate-600'
                      }`}
                  >
                    Incorrect ({results.incorrect})
                  </button>
                  <button
                    onClick={() => setReviewTab('correct')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${reviewTab === 'correct' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-100 text-slate-600'
                      }`}
                  >
                    Correct ({results.correct})
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => handleStartTest(selectedTest)}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Re-attempt</span>
                </button>
                <button
                  onClick={() => {
                    setIsTestFinished(false);
                    setIsTestActive(false);
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <span>Choose Another Test</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Question-by-Question Review List */}
            <div className="space-y-4">
              {selectedTest.questions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                const isUnattempted = userAns === undefined;

                if (reviewTab === 'incorrect' && isCorrect) return null;
                if (reviewTab === 'correct' && !isCorrect) return null;

                return (
                  <div
                    key={q.id}
                    className={`p-5 sm:p-6 rounded-2xl bg-white border-2 shadow-sm ${isCorrect
                        ? 'border-emerald-200'
                        : isUnattempted
                          ? 'border-slate-200'
                          : 'border-red-200'
                      }`}
                  >
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-bold text-slate-500">
                        Question {idx + 1}
                      </span>
                      {isCorrect && (
                        <span className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          <CheckCircle className="w-3.5 h-3.5" /> Correct (+{selectedTest.positiveMarks})
                        </span>
                      )}
                      {!isCorrect && !isUnattempted && (
                        <span className="flex items-center gap-1 text-red-700 font-bold bg-red-50 px-2 py-0.5 rounded">
                          <XCircle className="w-3.5 h-3.5" /> Incorrect (-{selectedTest.negativeMarks})
                        </span>
                      )}
                      {isUnattempted && (
                        <span className="flex items-center gap-1 text-slate-600 font-semibold bg-slate-100 px-2 py-0.5 rounded">
                          <HelpCircle className="w-3.5 h-3.5" /> Unattempted (0)
                        </span>
                      )}
                    </div>

                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-4 leading-relaxed">
                      {q.question}
                    </h4>

                    {/* Options Breakdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm mb-4">
                      {q.options.map((opt, oIdx) => {
                        const isThisCorrect = oIdx === q.correctAnswer;
                        const isUserChoice = oIdx === userAns;

                        let style = 'border-slate-200 bg-slate-50 text-slate-700';
                        if (isThisCorrect) {
                          style = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                        } else if (isUserChoice && !isThisCorrect) {
                          style = 'border-red-400 bg-red-50 text-red-900 line-through';
                        }

                        return (
                          <div
                            key={oIdx}
                            className={`p-3 rounded-xl border flex items-center justify-between ${style}`}
                          >
                            <span>
                              <strong>{String.fromCharCode(65 + oIdx)}.</strong> {opt}
                            </span>
                            {isThisCorrect && (
                              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                            {isUserChoice && !isThisCorrect && (
                              <XCircle className="w-4 h-4 text-red-600 shrink-0 ml-2" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-800">
                      <strong className="text-blue-900 font-bold block mb-1">Detailed Explanation:</strong>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

