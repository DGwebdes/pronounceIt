import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
            <div className="text-xl font-bold dark:text-white">PronounceIt</div>
            <div className="hidden md:flex space-x-4 dark:text-white">
                <button onClick={toggleTheme}>
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
                {/* <a href="#" className="hover:underline">
                    About
                </a> */}
            </div>

            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl"
                >
                    ☰
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 p-4 md:hidden flex flex-col space-y-2">
                    <button onClick={toggleTheme}>
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                    {/* <a href="#" className="hover:underline">
                        About
                    </a> */}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
