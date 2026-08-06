import type { LumiPet, LumiMood, LumiStage } from "../types/lumi";
import { STAGE_THRESHOLDS } from "../types/lumi";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function calculateStage(level: number): LumiStage {
  if (level >= STAGE_THRESHOLDS.tree) return "tree";
  if (level >= STAGE_THRESHOLDS.flower) return "flower";
  if (level >= STAGE_THRESHOLDS.sprout) return "sprout";
  return "seed";
}

const DEFAULT_LUMI: LumiPet = {
  level: 2,
  experience: 35,
  experienceToNext: 100,
  stage: "sprout",
  mood: "calm",
  energy: 75,
  growthDays: 7,
  unlockedItems: ["gentle-glow", "morning-dew"],
  lastCaredAt: new Date().toISOString(),
  name: "Lumi",
};

let currentLumi: LumiPet = { ...DEFAULT_LUMI };

export const lumiService = {
  async getLumi(): Promise<LumiPet> {
    await delay(500);
    return { ...currentLumi };
  },

  async feedLumi(): Promise<LumiPet> {
    await delay(400);
    currentLumi = {
      ...currentLumi,
      energy: Math.min(currentLumi.energy + 15, 100),
      mood: "happy",
      lastCaredAt: new Date().toISOString(),
    };
    return { ...currentLumi };
  },

  async addExperience(amount: number): Promise<LumiPet> {
    await delay(300);
    let newXP = currentLumi.experience + amount;
    let newLevel = currentLumi.level;
    let toNext = currentLumi.experienceToNext;

    while (newXP >= toNext) {
      newXP -= toNext;
      newLevel += 1;
      toNext = Math.floor(toNext * 1.3);
    }

    const newStage = calculateStage(newLevel);

    currentLumi = {
      ...currentLumi,
      experience: newXP,
      experienceToNext: toNext,
      level: newLevel,
      stage: newStage,
    };
    return { ...currentLumi };
  },

  async updateMood(mood: LumiMood): Promise<LumiPet> {
    await delay(200);
    currentLumi = { ...currentLumi, mood };
    return { ...currentLumi };
  },

  async unlockReward(itemId: string): Promise<LumiPet> {
    await delay(300);
    if (!currentLumi.unlockedItems.includes(itemId)) {
      currentLumi = {
        ...currentLumi,
        unlockedItems: [...currentLumi.unlockedItems, itemId],
      };
    }
    return { ...currentLumi };
  },

  async careForLumi(): Promise<LumiPet> {
    await delay(600);
    let newXP = currentLumi.experience + 20;
    let newLevel = currentLumi.level;
    let toNext = currentLumi.experienceToNext;

    while (newXP >= toNext) {
      newXP -= toNext;
      newLevel += 1;
      toNext = Math.floor(toNext * 1.3);
    }

    const newStage = calculateStage(newLevel);
    const moods: LumiMood[] = ["happy", "excited", "calm"];
    const newMood = moods[Math.floor(Math.random() * moods.length)];

    currentLumi = {
      ...currentLumi,
      experience: newXP,
      experienceToNext: toNext,
      level: newLevel,
      stage: newStage,
      mood: newMood,
      energy: Math.min(currentLumi.energy + 10, 100),
      lastCaredAt: new Date().toISOString(),
    };
    return { ...currentLumi };
  },
};
