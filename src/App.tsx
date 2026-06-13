import { useState, useMemo } from "react";
import { useRoadmap } from "./hooks/useRoadmap";
import { topics, phases } from "./data/roadmap";
import PhaseSection from "./components/PhaseSection";
import ActivityLog from "./components/ActivityLog";
import StatsPanel from "./components/StatsPanel";
import ProgressBar from "./components/ProgressBar";

const PRIORITY_TOPICS = [1, 2, 4, 5, 6, 7, 9, 11, 12, 17, 19, 20, 21, 23, 29, 31, 28];

export default function App() {
  const {
    progress,
    toggleSubtopic,
    toggleTopic,
    clearAllProgress,
    isTopicCompleted,
    isSubtopicCompleted,
    getTopicSubtopicProgress,
  } = useRoadmap();

  const [showLog, setShowLog] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPhase, setFilterPhase] = useState<number | null>(null);
  const [showPriorityOnly, setShowPriorityOnly] = useState(false);


  const totalSubtopics = useMemo(() => topics.reduce((s, t) => s + t.subtopics.length, 0), []);
  const overallPct = totalSubtopics > 0
    ? (progress.completedSubtopics.length / totalSubtopics) * 100
    : 0;

  const filteredTopics = useMemo(() => {
    let result = topics;
    if (filterPhase !== null) result = result.filter((t) => t.phase === filterPhase);
    if (showPriorityOnly) result = result.filter((t) => PRIORITY_TOPICS.includes(t.number));
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.why.toLowerCase().includes(q) ||
          t.subtopics.some(
            (s) =>
              s.title.toLowerCase().includes(q) ||
              s.description.toLowerCase().includes(q)
          )
      );
    }
    return result;
  }, [filterPhase, showPriorityOnly, searchQuery]);

  const groupedByPhase = useMemo(() => {
    return phases
      .map((phase) => ({
        phase,
        topics: filteredTopics.filter((t) => t.phase === phase.id),
      }))
      .filter((g) => g.topics.length > 0);
  }, [filteredTopics]);

  const handleClearLogs = () => {
    // Only clear logs, keep progress
    // We implement this by re-using clearAllProgress which resets everything
    // Instead let's just alert user
    if (window.confirm("This will clear all your progress AND logs. Are you sure?")) {
      clearAllProgress();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* ── Top Nav ── */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow">
              <span className="text-white text-sm">🧠</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-extrabold text-slate-800 text-sm leading-none">Master Roadmap</h1>
              <p className="text-[10px] text-slate-400 leading-none">57 Topics · 9 Phases</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-sm relative">
            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-sm bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Progress mini */}
          <div className="hidden md:flex items-center gap-2 min-w-[120px]">
            <ProgressBar value={overallPct} color="bg-violet-500" height="h-2" />
            <span className="text-xs font-bold text-slate-600 whitespace-nowrap">{Math.round(overallPct)}%</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setShowStats((v) => !v)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              📊 Stats
            </button>
            <button
              onClick={() => setShowLog(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors relative"
            >
              📋 Log
              {progress.logs.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-violet-500 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                  {progress.logs.length > 99 ? "99+" : progress.logs.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Phase filter bar */}
        <div className="border-t border-slate-100 px-4 py-2 flex gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => { setFilterPhase(null); setShowPriorityOnly(false); }}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-colors
              ${filterPhase === null && !showPriorityOnly ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            All
          </button>
          <button
            onClick={() => { setShowPriorityOnly((v) => !v); setFilterPhase(null); }}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-colors
              ${showPriorityOnly ? "bg-amber-500 text-white" : "bg-amber-50 text-amber-700 hover:bg-amber-100"}`}
          >
            ⭐ Priority
          </button>
          {phases.map((p) => (
            <button
              key={p.id}
              onClick={() => { setFilterPhase(filterPhase === p.id ? null : p.id); setShowPriorityOnly(false); }}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap
                ${filterPhase === p.id ? `bg-gradient-to-r ${p.gradient} text-white shadow-sm` : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
            >
              {p.icon} Phase {p.id}
            </button>
          ))}
        </div>
      </header>

      {/* ── Main layout ── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 flex gap-6">
        {/* Content */}
        <main className="flex-1 min-w-0">
          {/* Hero banner */}
          {!searchQuery && filterPhase === null && !showPriorityOnly && (
            <div className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-6 shadow-lg">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-white font-extrabold text-xl mb-1">
                    🚀 Master Roadmap Tracker
                  </h2>
                  <p className="text-white/80 text-sm max-w-lg">
                    57 topics across 9 phases — Software Engineering, DSA, Cybersecurity, AI/ML,
                    Robotics, Electronics, Embedded Systems, Signal Processing, Physics & Chemistry.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Math", "CS", "AI/ML", "Cybersecurity", "Robotics", "Signals"].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right text-white">
                  <p className="text-4xl font-extrabold">{Math.round(overallPct)}%</p>
                  <p className="text-white/70 text-xs">Overall Completion</p>
                  <p className="text-white/60 text-xs mt-1">
                    {progress.completedSubtopics.length}/{totalSubtopics} sub-topics
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-white rounded-full transition-all duration-700"
                    style={{ width: `${overallPct}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Priority notice */}
          {showPriorityOnly && (
            <div className="mb-4 rounded-xl bg-amber-50 border border-amber-200 p-3 flex items-start gap-2">
              <span className="text-xl">⭐</span>
              <div>
                <p className="font-bold text-amber-800 text-sm">Priority Topics for Your Career Goals</p>
                <p className="text-xs text-amber-600">
                  These 17 topics form the mathematical backbone of modern software engineering,
                  cybersecurity, AI/ML, robotics, and signal engineering.
                </p>
              </div>
            </div>
          )}

          {/* Search results info */}
          {searchQuery && (
            <p className="mb-4 text-sm text-slate-500">
              Found <span className="font-bold text-slate-700">{filteredTopics.length}</span> topics matching "{searchQuery}"
            </p>
          )}

          {/* No results */}
          {groupedByPhase.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <span className="text-5xl mb-3">🔍</span>
              <p className="font-semibold">No topics found</p>
              <p className="text-sm">Try a different search or filter</p>
            </div>
          )}

          {/* Phase sections */}
          {groupedByPhase.map(({ phase, topics: phaseTopics }) => (
            <PhaseSection
              key={phase.id}
              phase={phase}
              topics={phaseTopics}
              isTopicCompleted={isTopicCompleted}
              isSubtopicCompleted={isSubtopicCompleted}
              getTopicSubtopicProgress={getTopicSubtopicProgress}
              onToggleTopic={toggleTopic}
              onToggleSubtopic={toggleSubtopic}
            />
          ))}
        </main>

        {/* Sidebar — desktop */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-[106px] space-y-4">
            <StatsPanel
              completedTopics={progress.completedTopics}
              completedSubtopics={progress.completedSubtopics}
            />

            {/* Quick actions */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span>⚡</span> Quick Actions
              </h3>
              <button
                onClick={() => setShowLog(true)}
                className="w-full text-left px-3 py-2 rounded-xl bg-slate-50 hover:bg-violet-50 text-sm text-slate-700 font-medium transition-colors flex items-center gap-2"
              >
                📋 View Activity Log
                {progress.logs.length > 0 && (
                  <span className="ml-auto bg-violet-100 text-violet-700 text-xs px-2 py-0.5 rounded-full font-bold">
                    {progress.logs.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => {
                  if (window.confirm("Reset ALL progress? This cannot be undone.")) clearAllProgress();
                }}
                className="w-full text-left px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-sm text-red-600 font-medium transition-colors flex items-center gap-2"
              >
                🗑️ Reset All Progress
              </button>
            </div>

            {/* Priority reminder */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <h3 className="font-bold text-amber-800 text-sm flex items-center gap-2 mb-2">
                <span>⭐</span> Priority Focus Areas
              </h3>
              <div className="space-y-1">
                {["Algebra", "Trigonometry", "Calculus I–III", "Linear Algebra", "Probability",
                  "Statistics", "Discrete Math", "Graph Theory", "Number Theory",
                  "Differential Equations", "Signal Processing", "Optimization", "Information Theory"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-amber-700">
                    <span>→</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Floating mobile stats ── */}
      <div className="fixed bottom-4 right-4 z-20 flex flex-col gap-2 lg:hidden">
        <button
          onClick={() => setShowStats((v) => !v)}
          className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-xl"
        >
          📊
        </button>
        <button
          onClick={() => setShowLog(true)}
          className="w-12 h-12 rounded-full bg-violet-600 shadow-lg flex items-center justify-center text-xl relative"
        >
          📋
          {progress.logs.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
              {progress.logs.length > 9 ? "9+" : progress.logs.length}
            </span>
          )}
        </button>
      </div>

      {/* ── Mobile stats modal ── */}
      {showStats && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm lg:hidden">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-slate-800">Progress Stats</h2>
              <button onClick={() => setShowStats(false)} className="p-1.5 rounded-xl hover:bg-slate-100">
                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <StatsPanel
              completedTopics={progress.completedTopics}
              completedSubtopics={progress.completedSubtopics}
            />
          </div>
        </div>
      )}

      {/* ── Activity Log Modal ── */}
      {showLog && (
        <ActivityLog
          logs={progress.logs}
          onClose={() => setShowLog(false)}
          onClearLogs={handleClearLogs}
        />
      )}
    </div>
  );
}
