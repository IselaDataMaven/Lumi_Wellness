/**
 * Dashboard module types — Lumi Wellness
 */

export interface DashboardUser {
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  streakDays: number;
  level: number;
}

export interface WellnessScore {
  value: number;
  max: number;
  trend: "up" | "down" | "stable";
  changePercent: number;
}

export interface Habit {
  id: string;
  name: string;
  icon: string;
  completed: boolean;
  target: number;
  current: number;
  unit: string;
  color: string;
}

export interface WaterData {
  current: number;
  goal: number;
  unit: string;
  history: number[];
}

export interface SleepData {
  hours: number;
  minutes: number;
  quality: "poor" | "fair" | "good" | "excellent";
  goal: number;
  weekHistory: number[];
}

export interface MoodEntry {
  value: number;
  label: string;
  emoji: string;
  timestamp: string;
}

export interface MoodData {
  current: MoodEntry;
  weekHistory: MoodEntry[];
}

export interface ExerciseData {
  minutesToday: number;
  goal: number;
  caloriesBurned: number;
  sessionsCompleted: number;
}

export interface NutritionData {
  calories: number;
  caloriesGoal: number;
  protein: number;
  proteinGoal: number;
  water: number;
  waterGoal: number;
}

export interface DailyGoal {
  id: string;
  label: string;
  completed: boolean;
  icon: string;
}

export interface WeekDay {
  day: string;
  score: number;
  isToday: boolean;
}

export interface WeeklyStats {
  days: WeekDay[];
  averageScore: number;
  completedGoals: number;
  totalGoals: number;
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  unlockedAt?: string;
}

export interface RecentActivity {
  id: string;
  title: string;
  description: string;
  icon: string;
  time: string;
  color: string;
}

export interface MotivationalQuote {
  text: string;
  author: string;
}

export interface DashboardData {
  user: DashboardUser;
  wellnessScore: WellnessScore;
  habits: Habit[];
  water: WaterData;
  sleep: SleepData;
  mood: MoodData;
  exercise: ExerciseData;
  nutrition: NutritionData;
  dailyGoals: DailyGoal[];
  weeklyStats: WeeklyStats;
  recentActivity: RecentActivity[];
  quote: MotivationalQuote;
  achievements: Achievement[];
}

export type NavTab = "home" | "progress" | "ai" | "community" | "profile";
