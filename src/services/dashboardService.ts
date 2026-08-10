import type { DashboardData } from "../types/dashboard";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const MOCK_DATA: DashboardData = {
  user: {
    firstName: "Sofia",
    lastName: "Wellness",
    streakDays: 7,
    level: 3,
  },
  wellnessScore: {
    value: 78,
    max: 100,
    trend: "up",
    changePercent: 5,
  },
  habits: [
    { id: "h1", name: "Meditation", icon: "🧘", completed: true, target: 1, current: 1, unit: "session", color: "#CDB4DB" },
    { id: "h2", name: "Stretching", icon: "🌸", completed: false, target: 1, current: 0, unit: "session", color: "#D88FA8" },
    { id: "h3", name: "Journaling", icon: "📝", completed: true, target: 1, current: 1, unit: "entry", color: "#A8D5BA" },
    { id: "h4", name: "Walk", icon: "🚶", completed: false, target: 20, current: 12, unit: "min", color: "#F7E7A9" },
  ],
  water: {
    current: 5,
    goal: 8,
    unit: "glasses",
    history: [6, 7, 5, 8, 6, 7, 5],
  },
  sleep: {
    hours: 7,
    minutes: 30,
    quality: "good",
    goal: 8,
    weekHistory: [6.5, 7, 7.5, 6, 8, 7, 7.5],
  },
  mood: {
    current: { value: 4, label: "Good", emoji: "🙂", timestamp: new Date().toISOString() },
    weekHistory: [
      { value: 3, label: "Okay", emoji: "😐", timestamp: "" },
      { value: 4, label: "Good", emoji: "🙂", timestamp: "" },
      { value: 5, label: "Great", emoji: "😊", timestamp: "" },
      { value: 4, label: "Good", emoji: "🙂", timestamp: "" },
      { value: 3, label: "Okay", emoji: "😐", timestamp: "" },
      { value: 4, label: "Good", emoji: "🙂", timestamp: "" },
      { value: 4, label: "Good", emoji: "🙂", timestamp: "" },
    ],
  },
  exercise: {
    minutesToday: 25,
    goal: 30,
    caloriesBurned: 180,
    sessionsCompleted: 2,
  },
  nutrition: {
    calories: 1450,
    caloriesGoal: 2000,
    protein: 55,
    proteinGoal: 80,
    water: 5,
    waterGoal: 8,
  },
  dailyGoals: [
    { id: "g1", label: "Morning meditation", completed: true, icon: "🧘" },
    { id: "g2", label: "Drink 8 glasses of water", completed: false, icon: "💧" },
    { id: "g3", label: "30 min exercise", completed: false, icon: "🏃" },
    { id: "g4", label: "Journal before bed", completed: false, icon: "📝" },
    { id: "g5", label: "Breathing exercise", completed: true, icon: "🌬️" },
  ],
  weeklyStats: {
    days: [
      { day: "Mon", score: 72, isToday: false },
      { day: "Tue", score: 85, isToday: false },
      { day: "Wed", score: 68, isToday: false },
      { day: "Thu", score: 90, isToday: false },
      { day: "Fri", score: 76, isToday: false },
      { day: "Sat", score: 82, isToday: false },
      { day: "Sun", score: 78, isToday: true },
    ],
    averageScore: 79,
    completedGoals: 23,
    totalGoals: 35,
  },
  recentActivity: [
    { id: "a1", title: "Morning Stretch", description: "10 min · Gentle", icon: "🌸", time: "8:30 AM", color: "#FBF0F4" },
    { id: "a2", title: "Meditation", description: "15 min · Mindfulness", icon: "🧘", time: "9:00 AM", color: "#F5EDF9" },
    { id: "a3", title: "Breathing", description: "5 min · 4-7-8", icon: "🌬️", time: "12:30 PM", color: "#EDF7F1" },
  ],
  quote: {
    text: "Be gentle with yourself. You are doing the best you can.",
    author: "Lumi",
  },
  achievements: [
    { id: "ac1", title: "7 Day Streak", icon: "🔥", unlockedAt: "Today" },
    { id: "ac2", title: "First Meditation", icon: "🧘", unlockedAt: "3 days ago" },
  ],
};

// ─── Daily Greeting Builder ───────────────────────────────────────────────────

export interface DailyGreeting {
  title: string;
  subtitle: string;
  suggestedAction: string;
  actionPath: string;
  icon: string;
}

interface GreetingContext {
  mood: number;
  energy: number;
  stress: number;
  sleepHours: number;
  water: number;
}

export function buildDailyGreeting(ctx: GreetingContext): DailyGreeting {
  if (ctx.energy <= 3) {
    return {
      title: "Take it slow today 🌿",
      subtitle: "Your energy is low — and that's okay. Be gentle.",
      suggestedAction: "Try a short stretch",
      actionPath: "/exercises?category=stretch",
      icon: "🌿",
    };
  }
  if (ctx.stress >= 7) {
    return {
      title: "You deserve a pause 🌸",
      subtitle: "Stress is high. Let's bring it down together.",
      suggestedAction: "Let's breathe together",
      actionPath: "/exercises?category=meditation",
      icon: "🌸",
    };
  }
  if (ctx.sleepHours < 5) {
    return {
      title: "Be kind to yourself 😴",
      subtitle: "Sleep was short. Give yourself extra grace today.",
      suggestedAction: "Don't forget to rest",
      actionPath: "/checkin",
      icon: "😴",
    };
  }
  if (ctx.mood >= 4 && ctx.energy >= 6) {
    return {
      title: "You're doing great ✨",
      subtitle: "Your mood and energy are strong. Keep the momentum.",
      suggestedAction: "Keep the momentum",
      actionPath: "/lumi-ai",
      icon: "✨",
    };
  }
  if (ctx.water >= 6) {
    return {
      title: "Hydration champion 💧",
      subtitle: "You're taking great care of yourself today.",
      suggestedAction: "Check in with Lumi",
      actionPath: "/lumi-ai",
      icon: "💧",
    };
  }
  // Default
  return {
    title: "Welcome back 🌱",
    subtitle: "Every small step counts. What feels right today?",
    suggestedAction: "Start your check-in",
    actionPath: "/checkin",
    icon: "🌱",
  };
}

// ─── Dashboard API ────────────────────────────────────────────────────────────

export const dashboardService = {
  async getDashboardData(): Promise<DashboardData> {
    await delay(800);
    return { ...MOCK_DATA };
  },

  async refreshDashboard(): Promise<DashboardData> {
    await delay(500);
    return { ...MOCK_DATA, wellnessScore: { ...MOCK_DATA.wellnessScore, value: 78 + Math.floor(Math.random() * 5) } };
  },

  async toggleHabit(habitId: string): Promise<boolean> {
    await delay(300);
    return true;
  },

  async addWater(): Promise<number> {
    await delay(200);
    return MOCK_DATA.water.current + 1;
  },

  async logMood(value: number): Promise<boolean> {
    await delay(300);
    return true;
  },
};
