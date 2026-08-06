import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ExerciseProvider } from "./context/ExerciseContext";
import { router } from "./router";

export default function AppProviders() {
  return (
    <ThemeProvider>
      <ExerciseProvider>
        <RouterProvider router={router} />
      </ExerciseProvider>
    </ThemeProvider>
  );
}
