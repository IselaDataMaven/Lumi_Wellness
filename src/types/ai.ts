/**
 * Lumi AI Assistant — Data Model
 */

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface SuggestedPrompt {
  id: string;
  title: string;
  prompt: string;
}

export interface LumiAIState {
  messages: ChatMessage[];
  loading: boolean;
  typing: boolean;
}

export interface LumiContext {
  mood: number;
  energy: number;
  stress: number;
  water: number;
  sleepHours: number;
  lumiLevel: number;
}
