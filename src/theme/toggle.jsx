import { useDarkMode } from "./userDarkMode";

export const Toggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <label for="darkMode" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="darkMode"
          className="sr-only"
          checkbox={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        <div
          className={`block ${
            isDark ? " bg-gray-400" : "bg-yellow-600"
          } w-12 h-6 rounded-full`}
        ></div>
        <div
          className={`
        absolute left-1 top-1 rounded-full  w-4 h-4 transition
        ${isDark ? "translate-x-full" : ""}
        
        `}
        >
          {!isDark && <Light />}
          {isDark && <Dark />}
        </div>
      </div>
      <div className="ml-3 text-gray-700 font-medium"></div>
    </label>
  );
};

const Dark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 bg-black text-white rounded-full"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);
const Light = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 bg-yellow-300 text-yellow-600 rounded-full"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);
