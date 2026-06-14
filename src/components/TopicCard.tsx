import { useState } from "react";
import { Topic } from "../types";
import { Phase } from "../types";
import SubtopicCard from "./SubtopicCard";


interface Props {
  topic: Topic;
  phase: Phase;
  isTopicCompleted: boolean;
  isSubtopicCompleted: (id: string) => boolean;
  subtopicProgress: { done: number; total: number };
  onToggleTopic: () => void;
  onToggleSubtopic: (subtopicId: string, subtopicTitle: string) => void;
}

export default function TopicCard({
  topic,
  phase,
  isTopicCompleted,
  isSubtopicCompleted,
  subtopicProgress,
  onToggleTopic,
  onToggleSubtopic,
}: Props) {
  const [open, setOpen] = useState(false);
  const pct = subtopicProgress.total > 0
    ? (subtopicProgress.done / subtopicProgress.total) * 100
    : (isTopicCompleted ? 100 : 0);

  const progressColor =
    pct === 100 ? "bg-emerald-500" :
    pct > 0 ? "bg-amber-400" :
    "bg-slate-300";

  return (
    <div className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm
      ${isTopicCompleted || pct === 100
        ? "border-emerald-200 bg-emerald-50/40 dark:border-emerald-800 dark:bg-emerald-950/40"
        : "border-slate-200 bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-none"
      }`}
    >
      {/* Header */}
      <div className="flex items-start gap-3 p-4 cursor-pointer" onClick={() => setOpen((v) => !v)}>
        {/* Number badge */}
        <div className={`flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
          {topic.number}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className={`font-bold text-sm leading-tight
              ${isTopicCompleted || pct === 100 ? "text-emerald-700 dark:text-emerald-400" : "text-slate-800 dark:text-slate-100"}`}>
              {topic.title}
            </h3>
            <div className="flex items-center gap-2 flex-shrink-0">
              {subtopicProgress.total > 0 && (
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full
                  ${pct === 100 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" :
                    pct > 0 ? "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300" :
                    "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"}`}>
                  {subtopicProgress.done}/{subtopicProgress.total}
                </span>
              )}
              <svg
                className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-2">
            <div className={`h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden`}>
              <div
                className={`h-1.5 ${progressColor} rounded-full transition-all duration-500`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expanded content */}
      {open && (
        <div className="px-4 pb-4 pt-0 space-y-3">
          {/* Why section */}
          <div className={`rounded-xl bg-gradient-to-r ${phase.gradient} p-3`}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">Why Learn This?</p>
            <p className="text-xs text-white leading-relaxed">{topic.why}</p>
          </div>

          {/* Mark all button */}
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Sub-Topics</p>
            <button
              onClick={(e) => { e.stopPropagation(); onToggleTopic(); }}
              className={`text-xs px-3 py-1 rounded-full font-semibold transition-colors
                ${isTopicCompleted || pct === 100
                  ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-800"
                  : "bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900 dark:text-violet-300 dark:hover:bg-violet-800"}`}
            >
              {isTopicCompleted || pct === 100 ? "✓ All Done — Undo?" : "Mark All Complete"}
            </button>
          </div>

          {/* Subtopics */}
          <div className="space-y-2">
            {topic.subtopics.map((sub) => (
              <SubtopicCard
                key={sub.id}
                subtopic={sub}
                isCompleted={isSubtopicCompleted(sub.id)}
                onToggle={() => onToggleSubtopic(sub.id, sub.title)}
                phaseGradient={phase.gradient}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
