import { useState, useEffect, useCallback } from "react";
import type { DailyCheckIn, Mood, WaterEntry, SleepEntry } from "../types/wellness";
import { wellnessService } from "../services/wellnessService";

interface WellnessState {
  checkIn: DailyCheckIn | null;
  isLoading: boolean;
  error: string | null;
}

export function useWellness() {
  const [state, setState] = useState<WellnessState>({
    checkIn: null,
    isLoading: true,
    error: null,
  });

  const refresh = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));
      const checkIn = await wellnessService.getTodayCheckIn();
      setState({ checkIn, isLoading: false, error: null });
    } catch {
      setState((prev) => ({ ...prev, isLoading: false, error: "Failed to load check-in." }));
    }
  }, []);

  const save = useCallback(async () => {
    if (!state.checkIn) return false;
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      const checkIn = await wellnessService.saveCheckIn(state.checkIn);
      setState({ checkIn, isLoading: false, error: null });
      return true;
    } catch {
      setState((prev) => ({ ...prev, isLoading: false, error: "Failed to save check-in." }));
      return false;
    }
  }, [state.checkIn]);

  const updateMood = useCallback(async (mood: Mood) => {
    try {
      const checkIn = await wellnessService.updateMood(mood);
      setState((prev) => ({ ...prev, checkIn }));
    } catch {
      setState((prev) => ({ ...prev, error: "Failed to update mood." }));
    }
  }, []);

  const updateWater = useCallback(async (water: WaterEntry) => {
    try {
      const checkIn = await wellnessService.updateWater(water);
      setState((prev) => ({ ...prev, checkIn }));
    } catch {
      setState((prev) => ({ ...prev, error: "Failed to update water." }));
    }
  }, []);

  const updateSleep = useCallback(async (sleep: SleepEntry) => {
    try {
      const checkIn = await wellnessService.updateSleep(sleep);
      setState((prev) => ({ ...prev, checkIn }));
    } catch {
      setState((prev) => ({ ...prev, error: "Failed to update sleep." }));
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { ...state, refresh, save, updateMood, updateWater, updateSleep };
}
