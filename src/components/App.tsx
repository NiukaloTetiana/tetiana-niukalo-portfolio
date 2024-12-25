import { ThemeToggle } from "./ThemeToggle";

export const App = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <ThemeToggle />
      <h1 className="text-4xl text-accentColor">PORTFOLIO</h1>
    </div>
  );
};
