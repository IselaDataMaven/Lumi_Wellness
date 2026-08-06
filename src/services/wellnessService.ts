import type { DailyCheckIn, Mood, WaterEntry, SleepEntry } from "../types/wellness";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const today = new Date().toISOString().split("T")[0];

let currentCheckIn: DailyCheckIn = {
  id: `checkin-${today}`,
  date: today,
  mood: { value: 3, label: "Okay", emoji: "😐", timestamp: new Date().toISOString() },
  sleep: { hours: 7, minutes: 15, quality: "good", bedtime: "23:00", wakeTime: "06:15", date: today },
  water: { current: 3, goal: 8, unit: "glasses", date: today },
  energy: { value: 6, max: 10, label: "Moderate", timestamp: new Date().toISOString() },
  stress: { value: 4, max: 10, label: "Mild", triggers: [], timestamp: new Date().toISOString() },
  habits: [
    { id: "hab1", name: "Meditation", completed: true, streak: 5, target: 1, current: 1 },
    { id: "hab2", name: "Stretching", completed: false, streak: 3, target: 1, current: 0 },
    { id: "hab3", name: "Journaling", completed: false, streak: 2, target: 1, current: 0 },
  ],
  notes: "",
  completedAt: null,
};

export const wellnessService = {
  async getTodayCheckIn(): Promise<DailyCheckIn> {
    await delay(500);
    return { ...currentCheckIn };
  },

  async saveCheckIn(checkIn: DailyCheckIn): Promise<DailyCheckIn> {
    await delay(600);
    currentCheckIn = { ...checkIn, completedAt: new Date().toISOString() };
    return { ...currentCheckIn };
  },

  async updateMood(mood: Mood): Promise<DailyCheckIn> {
    await delay(300);
    currentCheckIn = { ...currentCheckIn, mood };
    return { ...currentCheckIn };
  },

  async updateWater(water: WaterEntry): Promise<DailyCheckIn> {
    await delay(200);
    currentCheckIn = { ...currentCheckIn, water };
    return { ...currentCheckIn };
  },

  async updateSleep(sleep: SleepEntry): Promise<DailyCheckIn> {
    await delay(300);
    currentCheckIn = { ...currentCheckIn, sleep };
    return { ...currentCheckIn };
  },
};
