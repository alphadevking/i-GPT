import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            className={`${theme === "dark" ? "text-inherit bg-inherit" : "text-inherit bg-inherit"
                } rounded-full flex items-center p-3`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <FaSun />
            ) : (
                <FaMoon />
            )}
            {/* <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span> */}
        </button>
    );
};

export default ThemeSwitch;
