import { PaletteIcon } from "lucide-react";

const THEMES = [
  {
    name: "pastel",
    label: "Pastel",
    colors: ["#ffd8d8", "#b7e4c7", "#d8b4fe"],
  },
  {
    name: "retro",
    label: "Retro",
    colors: ["#e2d5bc", "#ef9995", "#a4cbb4"],
  },
  {
    name: "coffee",
    label: "Coffee",
    colors: ["#20161F", "#A67C58", "#807666"],
  },
  {
    name: "forest",
    label: "Forest",
    colors: ["#171212", "#2B4C3F", "#6BAA75"],
  },
  {
    name: "cyberpunk",
    label: "Cyberpunk",
    colors: ["#FF00FF", "#00FFFF", "#FF7598"],
  },
  {
    name: "synthwave",
    label: "Synthwave",
    colors: ["#2D1B69", "#FF1E9E", "#1EDBFF"],
  },
  {
    name: "luxury",
    label: "Luxury",
    colors: ["#171618", "#B6862D", "#E2C697"],
  },
  {
    name: "autumn",
    label: "Autumn",
    colors: ["#D8B4A0", "#D27548", "#BA4A00"],
  },
  {
    name: "valentine",
    label: "Valentine",
    colors: ["#E96D7B", "#FF8FAB", "#FFB3C6"],
  },
  {
    name: "aqua",
    label: "Aqua",
    colors: ["#2DD4BF", "#06B6D4", "#0EA5E9"],
  },
  {
    name: "business",
    label: "Business",
    colors: ["#1C4E80", "#0091D5", "#7DB9DE"],
  },
  {
    name: "night",
    label: "Night",
    colors: ["#0F172A", "#334155", "#64748B"],
  },
  {
    name: "dracula",
    label: "Dracula",
    colors: ["#282A36", "#BD93F9", "#FF79C6"],
  },
];

const ThemeSelector = () => {
  const theme = "forest";
  return (
    <div className="dropdown dropdown-end">
      {/* Dropdown Trigger */}
      <button tabIndex={0} className="btn btn-ghost btn-circle">
        <PaletteIcon className="size-6" />
      </button>

      <div
        tabIndex={0}
        className="dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl w-56 border border-base-content/10"
      >
        {THEMES.map((themeOption) => (
          <button
            key={themeOption.name}
            className={`w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${
              theme === themeOption.name
                ? "bg-primary/10 text-primary"
                : "hover:bg-base-content/5"
            }`}
          >
            <PaletteIcon className="size-4" />
            <span className="text-sm font-medium">{themeOption.label}</span>
            {/* theme preview colors */}
            <div className="ml-auto flex gap-1">
              {themeOption.colors.map((color, i) => (
                <span
                  key={i}
                  className="size-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
