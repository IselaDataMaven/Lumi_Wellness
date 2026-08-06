/**
 * Wellness Module — Data Model
 */

export type MoodLevel = 1 | 2 | 3 | 4 | 5;

export interface Mood {
  value: MoodLevel;
  label: string;
  emoji: string;
  timestamp: string;
}

export interface SleepEntry {
  hours: number;
  minutes: number;
  quality: "poor" | "fair" | "good" | "excellent";
  bedtime: string;
  wakeTime: string;
  date: string;
}

export interface WaterEntry {
  current: number;
  goal: number;
  unit: string;
  date: string;
}

export interface EnergyLevel {
  value: number;
  max: number;
  label: string;
  timestamp: string;
}

export interface StressLevel {
  value: number;
  max: number;
  label: string;
  triggers: string[];
  timestamp: string;
}

export interface HabitProgress {
  id: string;
  name: string;
  completed: boolean;
  streak: number;
  target: number;
  current: number;
}

export interface DailyCheckIn {
  id: string;
  date: string;
  mood: Mood;
  sleep: SleepEntry;
  water: WaterEntry;
  energy: EnergyLevel;
  stress: StressLevel;
  habits: HabitProgress[];
  notes: string;
  completedAt: string | null;
}
