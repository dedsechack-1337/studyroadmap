import { useState, useEffect, useCallback } from "react";
import { ProgressState, CompletionLog } from "../types";

const STORAGE_KEY = "masterRoadmapProgress";

const defaultState: ProgressState = {
  completedTopics: [],
  completedSubtopics: [],
  logs: [],
};

export function useRoadmap() {
  const [progress, setProgress] = useState<ProgressState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored) as ProgressState;
    } catch {}
    return defaultState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);



  const toggleSubtopic = useCallback(
    (topicId: string, subtopicId: string, topicTitle: string, subtopicTitle: string) => {
      setProgress((prev) => {
        const isCompleted = prev.completedSubtopics.includes(subtopicId);
        const newSubtopics = isCompleted
          ? prev.completedSubtopics.filter((id) => id !== subtopicId)
          : [...prev.completedSubtopics, subtopicId];

        const newLog: CompletionLog = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          topicId,
          subtopicId,
          topicTitle,
          subtopicTitle,
          action: isCompleted ? "uncompleted" : "completed",
          timestamp: new Date().toISOString(),
        };

        return {
          ...prev,
          completedSubtopics: newSubtopics,
          logs: [newLog, ...prev.logs],
        };
      });
    },
    []
  );

  const toggleTopic = useCallback(
    (topicId: string, topicTitle: string, allSubtopicIds: string[]) => {
      setProgress((prev) => {
        const isCompleted = prev.completedTopics.includes(topicId);
        const newTopics = isCompleted
          ? prev.completedTopics.filter((id) => id !== topicId)
          : [...prev.completedTopics, topicId];

        const newSubtopics = isCompleted
          ? prev.completedSubtopics.filter((id) => !allSubtopicIds.includes(id))
          : [...new Set([...prev.completedSubtopics, ...allSubtopicIds])];

        const newLog: CompletionLog = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          topicId,
          subtopicId: null,
          topicTitle,
          subtopicTitle: null,
          action: isCompleted ? "uncompleted" : "completed",
          timestamp: new Date().toISOString(),
        };

        return {
          ...prev,
          completedTopics: newTopics,
          completedSubtopics: newSubtopics,
          logs: [newLog, ...prev.logs],
        };
      });
    },
    []
  );

  const clearAllProgress = useCallback(() => {
    setProgress(defaultState);
  }, []);

  const isTopicCompleted = useCallback(
    (topicId: string) => progress.completedTopics.includes(topicId),
    [progress.completedTopics]
  );

  const isSubtopicCompleted = useCallback(
    (subtopicId: string) => progress.completedSubtopics.includes(subtopicId),
    [progress.completedSubtopics]
  );

  const getTopicSubtopicProgress = useCallback(
    (allSubtopicIds: string[]) => {
      const done = allSubtopicIds.filter((id) =>
        progress.completedSubtopics.includes(id)
      ).length;
      return { done, total: allSubtopicIds.length };
    },
    [progress.completedSubtopics]
  );

  return {
    progress,
    toggleSubtopic,
    toggleTopic,
    clearAllProgress,
    isTopicCompleted,
    isSubtopicCompleted,
    getTopicSubtopicProgress,
  };
}
