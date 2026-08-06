export type Screen =
  | "splash"
  | "onboarding"
  | "dashboard"
  | "checkin"
  | "exercises"
  | "exercise-detail"
  | "exercise-player"
  | "progress"
  | "journal"
  | "achievements"
  | "settings"
  | "success";

export interface Exercise {
  id: string;
  title: string;
  description: string;
  duration: number;
  difficulty: "Gentle" | "Easy" | "Moderate";
  category:
    | "Stretching"
    | "Breathing"
    | "Mindfulness"
    | "Mobility"
    | "Strength";
  bodyArea: string;
  color: string;
  bgColor: string;
  isFavorite: boolean;
  benefits: string[];
  steps: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  date?: string;
  category: "streak" | "exercise" | "journal" | "checkin" | "milestone";
  color: string;
}

export interface CheckinData {
  pain: number;
  mood: number;
  energy: number;
  sleep: number;
  stress: number;
  date: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  mood: number;
  content: string;
  tags: string[];
}
