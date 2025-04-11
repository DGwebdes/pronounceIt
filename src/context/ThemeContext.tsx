import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>(
        (localStorage.getItem("theme") as Theme) || "light",
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);

        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("Use this within Themed Components");

    return context;
};
