import { SubTopic } from "../types";
import { useState } from "react";

interface Props {
  subtopic: SubTopic;
  isCompleted: boolean;
  onToggle: () => void;
  phaseGradient: string;
}

export default function SubtopicCard({ subtopic, isCompleted, onToggle, phaseGradient }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden
        ${isCompleted
          ? "border-emerald-300 bg-emerald-50/60"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
        }`}
    >
      <div className="flex items-start gap-3 p-3">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200
            ${isCompleted
              ? "border-emerald-500 bg-emerald-500"
              : "border-slate-300 hover:border-emerald-400"
            }`}
          aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
        >
          {isCompleted && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className={`text-sm font-semibold leading-tight ${isCompleted ? "line-through text-slate-400" : "text-slate-800"}`}>
              {subtopic.title}
            </p>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-xs text-slate-400 hover:text-slate-600 flex-shrink-0 flex items-center gap-1 transition-colors"
            >
              {expanded ? (
                <>Hide <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/></svg></>
              ) : (
                <>Details <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg></>
              )}
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{subtopic.description}</p>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-slate-100 px-3 pb-3 pt-2 space-y-2">
          {subtopic.example && (
            <div className="bg-slate-50 rounded-lg p-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Example</p>
              <p className="text-xs text-slate-700 font-mono leading-relaxed">{subtopic.example}</p>
            </div>
          )}
          {subtopic.formula && (
            <div className={`bg-gradient-to-r ${phaseGradient} rounded-lg p-2.5`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/70 mb-1">Formula / Key Concept</p>
              <p className="text-xs text-white font-mono leading-relaxed">{subtopic.formula}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
