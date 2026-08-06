/**
 * Mock Authentication Service
 *
 * This service simulates authentication operations with mocked promises.
 * It is designed to be easily replaceable with Firebase, Supabase,
 * or AWS Cognito by implementing the same AuthService interface.
 */

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  profileComplete: boolean;
  createdAt: string;
}

export interface UserProfile {
  ageRange: string;
  mainGoal: string;
  dailyTime: number;
  preferredActivities: string[];
}

export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  error?: string;
}

// Simulated delay to mimic network requests
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// In-memory user store for demo
const MOCK_USER: User = {
  id: "lumi-user-001",
  email: "sofia@lumi.app",
  firstName: "Sofia",
  lastName: "Wellness",
  profileComplete: true,
  createdAt: "2025-08-01T00:00:00Z",
};

let currentUser: User | null = null;

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await delay(1200);

    if (!credentials.email || !credentials.password) {
      return { success: false, error: "Please fill in all fields." };
    }

    if (credentials.password.length < 6) {
      return { success: false, error: "Invalid email or password." };
    }

    currentUser = { ...MOCK_USER, email: credentials.email };
    return { success: true, user: currentUser };
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    await delay(1500);

    if (!data.email || !data.password || !data.firstName || !data.lastName) {
      return { success: false, error: "Please fill in all fields." };
    }

    if (data.password.length < 6) {
      return {
        success: false,
        error: "Password must be at least 6 characters.",
      };
    }

    currentUser = {
      id: `lumi-user-${Date.now()}`,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      profileComplete: false,
      createdAt: new Date().toISOString(),
    };

    return { success: true, user: currentUser };
  },

  async logout(): Promise<void> {
    await delay(400);
    currentUser = null;
  },

  async forgotPassword(email: string): Promise<AuthResponse> {
    await delay(1000);

    if (!email) {
      return { success: false, error: "Please enter your email." };
    }

    return { success: true };
  },

  async getCurrentUser(): Promise<User | null> {
    await delay(300);
    return currentUser;
  },

  async updateProfile(profile: UserProfile): Promise<AuthResponse> {
    await delay(800);

    if (currentUser) {
      currentUser = { ...currentUser, profileComplete: true };
      return { success: true, user: currentUser };
    }

    return { success: false, error: "No user logged in." };
  },

  async loginWithGoogle(): Promise<AuthResponse> {
    await delay(1500);
    currentUser = {
      ...MOCK_USER,
      email: "sofia.google@lumi.app",
      firstName: "Sofia",
    };
    return { success: true, user: currentUser };
  },

  async loginWithApple(): Promise<AuthResponse> {
    await delay(1500);
    currentUser = {
      ...MOCK_USER,
      email: "sofia.apple@lumi.app",
      firstName: "Sofia",
    };
    return { success: true, user: currentUser };
  },
};
