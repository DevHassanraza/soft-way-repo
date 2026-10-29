
"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="sw-theme-toggle sw-theme-placeholder" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      className={`sw-theme-toggle ${
        isDark ? "is-dark" : "is-light"
      }`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      <span className="sw-theme-icon" aria-hidden="true">
        {isDark ? "☾" : "☀"}
      </span>

      <span className="sw-theme-track" aria-hidden="true">
        <span className="sw-theme-dot" />
      </span>
    </button>
  );
}
