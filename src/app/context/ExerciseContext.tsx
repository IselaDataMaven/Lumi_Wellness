import { createContext, useContext, useState, type ReactNode } from "react";
import type { Exercise } from "../../types";

interface ExerciseContextValue {
  selectedExercise: Exercise | null;
  setSelectedExercise: (exercise: Exercise | null) => void;
}

const ExerciseContext = createContext<ExerciseContextValue | undefined>(
  undefined,
);

interface ExerciseProviderProps {
  children: ReactNode;
}

export function ExerciseProvider({ children }: ExerciseProviderProps) {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null,
  );

  return (
    <ExerciseContext.Provider value={{ selectedExercise, setSelectedExercise }}>
      {children}
    </ExerciseContext.Provider>
  );
}

export function useExercise(): ExerciseContextValue {
  const context = useContext(ExerciseContext);
  if (context === undefined) {
    throw new Error("useExercise must be used within an ExerciseProvider");
  }
  return context;
}
