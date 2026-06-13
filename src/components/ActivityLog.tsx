import { CompletionLog } from "../types";

interface Props {
  logs: CompletionLog[];
  onClose: () => void;
  onClearLogs?: () => void;
}

function timeAgo(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime();
  const secs = Math.floor(diff / 1000);
  if (secs < 60) return `${secs}s ago`;
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleString();
}

export default function ActivityLog({ logs, onClose, onClearLogs }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xl">📋</span>
            <div>
              <h2 className="font-bold text-slate-800">Activity Log</h2>
              <p className="text-xs text-slate-500">{logs.length} entries • Saved to localStorage</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {onClearLogs && logs.length > 0 && (
              <button
                onClick={onClearLogs}
                className="text-xs text-red-500 hover:text-red-700 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
              >
                Clear Logs
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Log list */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {logs.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-slate-400">
              <span className="text-4xl mb-2">📝</span>
              <p className="text-sm">No activity yet.</p>
              <p className="text-xs">Start completing topics!</p>
            </div>
          ) : (
            logs.map((log) => (
              <div
                key={log.id}
                className={`flex items-start gap-3 p-3 rounded-xl border
                  ${log.action === "completed"
                    ? "bg-emerald-50 border-emerald-100"
                    : "bg-rose-50 border-rose-100"
                  }`}
              >
                <span className="text-lg mt-0.5 flex-shrink-0">
                  {log.action === "completed" ? "✅" : "↩️"}
                </span>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold
                    ${log.action === "completed" ? "text-emerald-700" : "text-rose-600"}`}>
                    {log.action === "completed" ? "Completed" : "Marked Incomplete"}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 leading-tight">
                    {log.topicTitle}
                    {log.subtopicTitle && (
                      <span className="font-normal text-slate-600"> → {log.subtopicTitle}</span>
                    )}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5" title={formatDate(log.timestamp)}>
                    {timeAgo(log.timestamp)} · {formatDate(log.timestamp)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 p-3 bg-slate-50">
          <p className="text-xs text-slate-400 text-center">
            💾 All progress is automatically saved to your browser's localStorage
          </p>
        </div>
      </div>
    </div>
  );
}
