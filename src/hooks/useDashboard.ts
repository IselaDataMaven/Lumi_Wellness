import { useState, useEffect, useCallback } from "react";
import type { DashboardData } from "../types/dashboard";
import { dashboardService } from "../services/dashboardService";

interface DashboardState {
  data: DashboardData | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

export function useDashboard() {
  const [state, setState] = useState<DashboardState>({
    data: null,
    isLoading: true,
    isRefreshing: false,
    error: null,
  });

  const fetchData = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));
      const data = await dashboardService.getDashboardData();
      setState({ data, isLoading: false, isRefreshing: false, error: null });
    } catch {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isRefreshing: false,
        error: "Failed to load dashboard data.",
      }));
    }
  }, []);

  const refresh = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, isRefreshing: true }));
      const data = await dashboardService.refreshDashboard();
      setState((prev) => ({ ...prev, data, isRefreshing: false }));
    } catch {
      setState((prev) => ({ ...prev, isRefreshing: false }));
    }
  }, []);

  const toggleHabit = useCallback(async (habitId: string) => {
    await dashboardService.toggleHabit(habitId);
    setState((prev) => {
      if (!prev.data) return prev;
      const habits = prev.data.habits.map((h) =>
        h.id === habitId ? { ...h, completed: !h.completed, current: h.completed ? 0 : h.target } : h,
      );
      return { ...prev, data: { ...prev.data, habits } };
    });
  }, []);

  const addWater = useCallback(async () => {
    const newVal = await dashboardService.addWater();
    setState((prev) => {
      if (!prev.data) return prev;
      return { ...prev, data: { ...prev.data, water: { ...prev.data.water, current: newVal } } };
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refresh, toggleHabit, addWater };
}
