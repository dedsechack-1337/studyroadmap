import { Phase, Topic } from "../types";
import TopicCard from "./TopicCard";

interface Props {
  phase: Phase;
  topics: Topic[];
  isTopicCompleted: (id: string) => boolean;
  isSubtopicCompleted: (id: string) => boolean;
  getTopicSubtopicProgress: (ids: string[]) => { done: number; total: number };
  onToggleTopic: (topicId: string, topicTitle: string, allSubtopicIds: string[]) => void;
  onToggleSubtopic: (topicId: string, subtopicId: string, topicTitle: string, subtopicTitle: string) => void;
}

export default function PhaseSection({
  phase, topics, isTopicCompleted, isSubtopicCompleted,
  getTopicSubtopicProgress, onToggleTopic, onToggleSubtopic,
}: Props) {
  const allSubIds = topics.flatMap((t) => t.subtopics.map((s) => s.id));
  const completedSubs = allSubIds.filter(isSubtopicCompleted).length;
  const phasePct = allSubIds.length > 0 ? (completedSubs / allSubIds.length) * 100 : 0;

  return (
    <div className="mb-10">
      {/* Phase header */}
      <div className={`sticky top-0 z-10 bg-gradient-to-r ${phase.gradient} rounded-2xl p-4 mb-4 shadow-lg`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{phase.icon}</span>
            <div>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Phase {phase.id}</p>
              <h2 className="text-white font-extrabold text-lg leading-tight">{phase.name}</h2>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white/80 text-xs mb-1">{completedSubs}/{allSubIds.length} sub-topics</p>
            <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-2 bg-white rounded-full transition-all duration-500"
                style={{ width: `${phasePct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Topic cards */}
      <div className="space-y-3">
        {topics.map((topic) => {
          const subIds = topic.subtopics.map((s) => s.id);
          return (
            <TopicCard
              key={topic.id}
              topic={topic}
              phase={phase}
              isTopicCompleted={isTopicCompleted(topic.id)}
              isSubtopicCompleted={isSubtopicCompleted}
              subtopicProgress={getTopicSubtopicProgress(subIds)}
              onToggleTopic={() => onToggleTopic(topic.id, topic.title, subIds)}
              onToggleSubtopic={(subId, subTitle) =>
                onToggleSubtopic(topic.id, subId, topic.title, subTitle)
              }
            />
          );
        })}
      </div>
    </div>
  );
}
