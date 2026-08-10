import type { ChatMessage, SuggestedPrompt, LumiContext } from "../types/ai";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function generateId(): string {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── Lumi Personality ─────────────────────────────────────────────────────────
// Lumi is warm, calm, encouraging, optimistic, never judgmental, concise,
// and emotionally supportive. She never mentions being an AI.

// ─── Context-aware response templates ─────────────────────────────────────────

const lowEnergyResponses = [
  "Your energy feels low today, and that's perfectly okay. Maybe a slow stretch or just closing your eyes for two minutes could help restore a little.",
  "On days like this, rest isn't lazy — it's necessary. Be kind to yourself. Even sitting still for a moment counts.",
  "Low energy days happen. You're still showing up, and that matters. A glass of water and three deep breaths can be a gentle start.",
  "I can feel you're running on less today. Would a short body scan help you reconnect without spending energy you don't have?",
];

const highStressResponses = [
  "Stress is visiting today. Let's not fight it — let's breathe through it together. Inhale for four, hold for four, exhale for six.",
  "When everything feels heavy, one slow breath can lighten the load just enough. I'm here with you.",
  "Your body is holding a lot right now. What if we tried a grounding exercise? Name five things you can see around you.",
  "Stress doesn't define your day. You noticed it, and that awareness is already a step toward easing it.",
];

const poorSleepResponses = [
  "Sleep didn't come easy last night, did it? Be extra gentle with yourself today. Shorter tasks, more breaks, more grace.",
  "After a rough night, your body needs extra patience. A brief nap or even resting your eyes for five minutes can help.",
  "Poor sleep makes everything harder. Tonight, try dimming lights an hour before bed and skipping screens. Small shifts make a difference.",
  "I see sleep was tough. Remember — one difficult night doesn't undo your progress. Tonight is a fresh chance.",
];

const greatMoodResponses = [
  "Look at you — radiating good energy today. You've been putting in the work and it shows. Keep riding this wave.",
  "What a wonderful mood to carry. Take a moment to notice what contributed to it — so you can return here again.",
  "You're glowing today. This is the result of every small choice you've made. Celebrate this feeling.",
  "Days like this remind us why the journey matters. You're doing beautifully. Enjoy it fully.",
];

const goodHydrationResponses = [
  "You're keeping up with your water — that's a quiet act of self-care that makes a real difference. Keep sipping.",
  "Your hydration is on track. Your body thanks you with better focus and steadier energy. Well done.",
  "Staying hydrated is one of the simplest gifts you can give yourself. You're nailing it today.",
];

const motivationResponses = [
  "You've already done the hardest part — you showed up. Everything else is just one small step at a time.",
  "Progress isn't always visible, but it's always happening. Trust the process. Trust yourself.",
  "Even the smallest action today builds tomorrow's strength. You're more capable than you know.",
  "On the days you feel like doing nothing, doing something tiny is a victory. I believe in you.",
];

const relaxationResponses = [
  "Let's slow down together. Close your eyes. Take one deep breath in... and let it go completely. Again. You're safe here.",
  "Relaxation isn't earned — it's needed. Right now, soften your shoulders. Unclench your jaw. Let gravity hold you.",
  "Imagine a warm light slowly moving from the top of your head down to your toes, melting tension as it goes.",
  "You deserve stillness. For the next minute, just breathe. No goals. No tasks. Just being.",
];

const sleepHelpResponses = [
  "For tonight, try this: dim all lights an hour before bed. Write three things that went well today. Let your mind release the rest.",
  "A calming bedtime routine makes all the difference. Perhaps a gentle stretch, a warm drink, and slow breathing before sleep.",
  "If your mind races at night, try the 4-7-8 breath: inhale 4 counts, hold 7, exhale 8. Repeat until drowsiness comes.",
  "Sleep is a skill that improves with practice. Be patient with yourself. Each night is a new opportunity to rest well.",
];

const generalResponses = [
  "I'm here whenever you need me. What would feel most supportive right now?",
  "Every moment you spend caring for yourself ripples outward. How can I help today?",
  "You're doing something meaningful just by checking in. What's on your heart?",
  "There's no wrong way to feel. Whatever you bring here, I'll meet you with gentleness.",
];

// ─── Prompt-matching logic ────────────────────────────────────────────────────

function matchPrompt(message: string): string | null {
  const lower = message.toLowerCase();

  if (lower.includes("motivat") || lower.includes("encourage") || lower.includes("struggling")) {
    return pick(motivationResponses);
  }
  if (lower.includes("relax") || lower.includes("calm") || lower.includes("peace")) {
    return pick(relaxationResponses);
  }
  if (lower.includes("stress") || lower.includes("anxious") || lower.includes("overwhelm") || lower.includes("worried")) {
    return pick(highStressResponses);
  }
  if (lower.includes("sleep") || lower.includes("insomnia") || lower.includes("tired") || lower.includes("rest")) {
    return pick(sleepHelpResponses);
  }
  if (lower.includes("energy") || lower.includes("exhausted") || lower.includes("drained") || lower.includes("fatigue")) {
    return pick(lowEnergyResponses);
  }
  if (lower.includes("happy") || lower.includes("great") || lower.includes("amazing") || lower.includes("wonderful")) {
    return pick(greatMoodResponses);
  }
  if (lower.includes("water") || lower.includes("hydrat")) {
    return pick(goodHydrationResponses);
  }

  return null;
}

// ─── Context-based response selection ─────────────────────────────────────────

function buildContextResponse(context: LumiContext): string {
  if (context.energy <= 3) return pick(lowEnergyResponses);
  if (context.stress >= 7) return pick(highStressResponses);
  if (context.sleepHours < 5) return pick(poorSleepResponses);
  if (context.mood >= 5 && context.energy >= 7) return pick(greatMoodResponses);
  if (context.water >= 7) return pick(goodHydrationResponses);
  return pick(generalResponses);
}

// ─── Public service ───────────────────────────────────────────────────────────

export const lumiAIService = {
  async getWelcomeMessage(): Promise<ChatMessage> {
    await delay(400);
    return {
      id: generateId(),
      role: "assistant",
      content: "Hi there 🌸 I'm Lumi, your gentle wellness companion. How are you feeling right now?",
      timestamp: new Date().toISOString(),
    };
  },

  async sendMessage(message: string, context: LumiContext): Promise<ChatMessage> {
    await delay(700 + Math.random() * 500);

    // 1. Try to match the user's prompt directly
    const promptMatch = matchPrompt(message);
    if (promptMatch) {
      return {
        id: generateId(),
        role: "assistant",
        content: promptMatch,
        timestamp: new Date().toISOString(),
      };
    }

    // 2. Fall back to context-aware response
    const contextResponse = buildContextResponse(context);
    return {
      id: generateId(),
      role: "assistant",
      content: contextResponse,
      timestamp: new Date().toISOString(),
    };
  },

  async getSuggestedPrompts(): Promise<SuggestedPrompt[]> {
    await delay(300);
    return [
      { id: "sp1", title: "How am I doing?", prompt: "Based on how I've been feeling, how am I doing overall?" },
      { id: "sp2", title: "I need motivation", prompt: "I'm struggling today. Can you share something encouraging?" },
      { id: "sp3", title: "Help me relax", prompt: "I need help relaxing right now. What do you suggest?" },
      { id: "sp4", title: "I can't sleep", prompt: "I couldn't sleep well. What can I do tonight?" },
      { id: "sp5", title: "I'm stressed", prompt: "I'm feeling stressed and overwhelmed. Help me breathe." },
      { id: "sp6", title: "Celebrate me", prompt: "I'm feeling happy and energised today!" },
    ];
  },
};
