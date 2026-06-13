import { topics, phases } from "../data/roadmap";
import ProgressBar from "./ProgressBar";

interface Props {
  completedTopics: string[];
  completedSubtopics: string[];
}

export default function StatsPanel({ completedTopics, completedSubtopics }: Props) {
  const totalTopics = topics.length;
  const totalSubtopics = topics.reduce((sum, t) => sum + t.subtopics.length, 0);
  const topicPct = (completedTopics.length / totalTopics) * 100;
  const subtopicPct = (completedSubtopics.length / totalSubtopics) * 100;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-4">
      <h3 className="font-bold text-slate-800 flex items-center gap-2">
        <span>📊</span> Overall Progress
      </h3>

      {/* Global stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-violet-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-extrabold text-violet-600">{completedTopics.length}</p>
          <p className="text-xs text-slate-500">/ {totalTopics} Topics</p>
        </div>
        <div className="bg-emerald-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-extrabold text-emerald-600">{completedSubtopics.length}</p>
          <p className="text-xs text-slate-500">/ {totalSubtopics} Sub-Topics</p>
        </div>
      </div>

      <div className="space-y-2">
        <ProgressBar
          value={topicPct}
          color="bg-violet-500"
          height="h-2.5"
          showLabel
          label="Topics Completed"
        />
        <ProgressBar
          value={subtopicPct}
          color="bg-emerald-500"
          height="h-2.5"
          showLabel
          label="Sub-Topics Completed"
        />
      </div>

      {/* Per-phase breakdown */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">By Phase</p>
        <div className="space-y-2">
          {phases.map((phase) => {
            const phaseTopics = topics.filter((t) => t.phase === phase.id);
            const phaseSubIds = phaseTopics.flatMap((t) => t.subtopics.map((s) => s.id));
            const doneSubs = phaseSubIds.filter((id) => completedSubtopics.includes(id)).length;
            const pct = phaseSubIds.length > 0 ? (doneSubs / phaseSubIds.length) * 100 : 0;

            const barColor =
              pct === 100 ? "bg-emerald-500" :
              pct > 50 ? "bg-blue-500" :
              pct > 0 ? "bg-amber-400" :
              "bg-slate-300";

            return (
              <div key={phase.id} className="flex items-center gap-2">
                <span className="text-sm flex-shrink-0 w-5">{phase.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                    <span className="truncate pr-2">Phase {phase.id}</span>
                    <span>{doneSubs}/{phaseSubIds.length}</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-1.5 ${barColor} rounded-full transition-all duration-500`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
