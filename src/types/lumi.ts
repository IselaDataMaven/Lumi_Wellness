/**
 * Lumi Virtual Companion — Data Model
 */

export type LumiStage = "seed" | "sprout" | "flower" | "tree";

export type LumiMood = "happy" | "calm" | "tired" | "excited";

export interface LumiPet {
  level: number;
  experience: number;
  experienceToNext: number;
  stage: LumiStage;
  mood: LumiMood;
  energy: number;
  growthDays: number;
  unlockedItems: string[];
  lastCaredAt: string;
  name: string;
}

export interface LumiMessage {
  text: string;
  mood: LumiMood;
}

export const STAGE_THRESHOLDS: Record<LumiStage, number> = {
  seed: 0,
  sprout: 3,
  flower: 7,
  tree: 15,
};

export const STAGE_LABELS: Record<LumiStage, string> = {
  seed: "Seed",
  sprout: "Sprout",
  flower: "Flower",
  tree: "Tree",
};

export const MOOD_EMOJIS: Record<LumiMood, string> = {
  happy: "😊",
  calm: "🌿",
  tired: "😴",
  excited: "✨",
};

export const MOOD_LABELS: Record<LumiMood, string> = {
  happy: "Happy",
  calm: "Calm",
  tired: "Tired",
  excited: "Excited",
};
