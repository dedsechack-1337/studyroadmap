export type SubTopic = {
  id: string;
  title: string;
  description: string;
  example?: string;
  formula?: string;
};

export type Topic = {
  id: string;
  number: number;
  title: string;
  phase: number;
  phaseName: string;
  why: string;
  subtopics: SubTopic[];
};

export type Phase = {
  id: number;
  name: string;
  color: string;
  gradient: string;
  icon: string;
};

export type CompletionLog = {
  id: string;
  topicId: string;
  subtopicId: string | null;
  topicTitle: string;
  subtopicTitle: string | null;
  action: "completed" | "uncompleted";
  timestamp: string;
};

export type ProgressState = {
  completedTopics: string[];
  completedSubtopics: string[];
  logs: CompletionLog[];
};
