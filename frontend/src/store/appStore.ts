import { create } from 'zustand';
import type { OptimizeResponse, HistoryEntry, OptimizeRequest } from '../types/api.types';

interface AppState {
  lastResult: OptimizeResponse | null;
  lastRequest: OptimizeRequest | null;
  history: HistoryEntry[];
  setResult: (result: OptimizeResponse, request: OptimizeRequest) => void;
  clearResult: () => void;
}

// Simple in-memory + localStorage store
function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem('gridwise_history');
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveHistory(entries: HistoryEntry[]) {
  try {
    // Keep last 20
    localStorage.setItem('gridwise_history', JSON.stringify(entries.slice(0, 20)));
  } catch { /* ignore quota errors */ }
}

// 3 days in milliseconds
const EXPIRATION_MS = 3 * 24 * 60 * 60 * 1000;

function loadSession() {
  try {
    const raw = localStorage.getItem('gridwise_session');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.timestamp && Date.now() - parsed.timestamp < EXPIRATION_MS) {
        return { result: parsed.result, request: parsed.request };
      } else {
        localStorage.removeItem('gridwise_session');
      }
    }
  } catch { /* ignore */ }
  return { result: null, request: null };
}

function saveSession(result: OptimizeResponse | null, request: OptimizeRequest | null) {
  try {
    if (result && request) {
      localStorage.setItem('gridwise_session', JSON.stringify({
        timestamp: Date.now(),
        result,
        request,
      }));
    } else {
      localStorage.removeItem('gridwise_session');
    }
  } catch { /* ignore */ }
}

const initialSession = loadSession();

export const useAppStore = create<AppState>((set, get) => ({
  lastResult: initialSession.result,
  lastRequest: initialSession.request,
  history: loadHistory(),

  setResult: (result, request) => {
    const entry: HistoryEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date().toISOString(),
      scenario_id: result.scenario_id,
      operator_notes: request.operator_notes,
      result,
      request,
    };
    const newHistory = [entry, ...get().history].slice(0, 20);
    saveHistory(newHistory);
    saveSession(result, request);
    set({ lastResult: result, lastRequest: request, history: newHistory });
  },

  clearResult: () => {
    saveSession(null, null);
    set({ lastResult: null, lastRequest: null });
  },
}));
