import { useState, useCallback } from "react";
import type { ChatMessage, SuggestedPrompt, LumiContext } from "../types/ai";
import { lumiAIService } from "../services/lumiAIService";

interface LumiAIHookState {
  messages: ChatMessage[];
  suggestedPrompts: SuggestedPrompt[];
  isLoading: boolean;
  isTyping: boolean;
}

export function useLumiAI(context: LumiContext) {
  const [state, setState] = useState<LumiAIHookState>({
    messages: [],
    suggestedPrompts: [],
    isLoading: true,
    isTyping: false,
  });

  const initialize = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const [welcome, prompts] = await Promise.all([
      lumiAIService.getWelcomeMessage(),
      lumiAIService.getSuggestedPrompts(),
    ]);
    setState({
      messages: [welcome],
      suggestedPrompts: prompts,
      isLoading: false,
      isTyping: false,
    });
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date().toISOString(),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true,
    }));

    const response = await lumiAIService.sendMessage(content, context);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, response],
      isTyping: false,
    }));
  }, [context]);

  const resetConversation = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const welcome = await lumiAIService.getWelcomeMessage();
    setState((prev) => ({
      ...prev,
      messages: [welcome],
      isLoading: false,
      isTyping: false,
    }));
  }, []);

  return {
    ...state,
    initialize,
    sendMessage,
    resetConversation,
  };
}
