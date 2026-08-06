import { useState, useCallback } from "react";
import {
  authService,
  type User,
  type LoginCredentials,
  type RegisterData,
  type UserProfile,
} from "../services/authService";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
  });

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    const response = await authService.login(credentials);

    if (response.success && response.user) {
      setState({
        user: response.user,
        isLoading: false,
        error: null,
        isAuthenticated: true,
      });
      return true;
    }

    setState((prev) => ({
      ...prev,
      isLoading: false,
      error: response.error ?? "Login failed.",
    }));
    return false;
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    const response = await authService.register(data);

    if (response.success && response.user) {
      setState({
        user: response.user,
        isLoading: false,
        error: null,
        isAuthenticated: true,
      });
      return true;
    }

    setState((prev) => ({
      ...prev,
      isLoading: false,
      error: response.error ?? "Registration failed.",
    }));
    return false;
  }, []);

  const logout = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    await authService.logout();
    setState({
      user: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,
    });
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    const response = await authService.forgotPassword(email);

    setState((prev) => ({
      ...prev,
      isLoading: false,
      error: response.success ? null : (response.error ?? "Request failed."),
    }));

    return response.success;
  }, []);

  const updateProfile = useCallback(async (profile: UserProfile) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    const response = await authService.updateProfile(profile);

    if (response.success && response.user) {
      setState((prev) => ({
        ...prev,
        user: response.user!,
        isLoading: false,
      }));
      return true;
    }

    setState((prev) => ({
      ...prev,
      isLoading: false,
      error: response.error ?? "Profile update failed.",
    }));
    return false;
  }, []);

  const loginWithGoogle = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    const response = await authService.loginWithGoogle();

    if (response.success && response.user) {
      setState({
        user: response.user,
        isLoading: false,
        error: null,
        isAuthenticated: true,
      });
      return true;
    }

    setState((prev) => ({
      ...prev,
      isLoading: false,
      error: response.error ?? "Google login failed.",
    }));
    return false;
  }, []);

  const loginWithApple = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    const response = await authService.loginWithApple();

    if (response.success && response.user) {
      setState({
        user: response.user,
        isLoading: false,
        error: null,
        isAuthenticated: true,
      });
      return true;
    }

    setState((prev) => ({
      ...prev,
      isLoading: false,
      error: response.error ?? "Apple login failed.",
    }));
    return false;
  }, []);

  const loginAsGuest = useCallback(() => {
    setState({
      user: null,
      isLoading: false,
      error: null,
      isAuthenticated: true,
    });
  }, []);

  return {
    ...state,
    login,
    register,
    logout,
    forgotPassword,
    updateProfile,
    loginWithGoogle,
    loginWithApple,
    loginAsGuest,
    clearError,
  };
}
