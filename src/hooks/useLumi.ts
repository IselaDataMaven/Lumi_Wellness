import { useState, useEffect, useCallback } from "react";
import type { LumiPet, LumiMood } from "../types/lumi";
import { lumiService } from "../services/lumiService";

interface LumiState {
  lumi: LumiPet | null;
  isLoading: boolean;
  error: string | null;
}

export function useLumi() {
  const [state, setState] = useState<LumiState>({
    lumi: null,
    isLoading: true,
    error: null,
  });

  const fetchLumi = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));
      const lumi = await lumiService.getLumi();
      setState({ lumi, isLoading: false, error: null });
    } catch {
      setState((prev) => ({ ...prev, isLoading: false, error: "Failed to load Lumi." }));
    }
  }, []);

  const careForLumi = useCallback(async () => {
    try {
      const lumi = await lumiService.careForLumi();
      setState((prev) => ({ ...prev, lumi }));
      return true;
    } catch {
      return false;
    }
  }, []);

  const gainExperience = useCallback(async (amount: number) => {
    try {
      const lumi = await lumiService.addExperience(amount);
      setState((prev) => ({ ...prev, lumi }));
    } catch {
      // silent fail
    }
  }, []);

  const refreshLumi = useCallback(async () => {
    const lumi = await lumiService.getLumi();
    setState((prev) => ({ ...prev, lumi }));
  }, []);

  const updateMood = useCallback(async (mood: LumiMood) => {
    try {
      const lumi = await lumiService.updateMood(mood);
      setState((prev) => ({ ...prev, lumi }));
    } catch {
      // silent fail
    }
  }, []);

  useEffect(() => {
    fetchLumi();
  }, [fetchLumi]);

  return { ...state, careForLumi, gainExperience, refreshLumi, updateMood };
}
