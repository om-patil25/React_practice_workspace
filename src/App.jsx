import DailyJournal from "./pages/DailyJournal";
import { Link, Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import { House, NotebookPen, Users, Sun, Moon } from "lucide-react";
import UsersDB from "./pages/UsersDB";
import { ThemeDataContext } from "./context/ThemeContext";
import { useContext, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  const location = useLocation();
  const checkPath = (path) => {
    return location.pathname === path;
  };
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  const getCurrentLocation = () => {
    if (checkPath("/")) return "translate-x-0";
    if (checkPath("/DailyJournal")) return "translate-x-full";
    if (checkPath("/Users")) return "translate-x-[200%]";
  };

  return (
    <>
      <div className="w-full flex flex-row items-center justify-center h-20 md:h-14 bg-card-light/50 dark:bg-bg-dark/70 fixed bottom-0 md:top-0 z-10">
        <nav className="relative w-4/5 md:w-2/5 h-14 md:h-9 bg-accent-light dark:bg-card-dark rounded-4xl flex justify-evenly items-center">
          <div
            className={`absolute h-full top-0 left-0 bg-accentdeep-light dark:bg-accent-dark w-1/4 rounded-full transition-all duration-300 ${getCurrentLocation()}`}
          />
          <Link
            to="/"
            className="h-full flex justify-center flex-1 z-10 rounded-full text-gray-900 hover:text-shadow-2xs dark:text-white items-center gap-2"
          >
            <House />
            <span className="hidden md:block"> Home</span>
          </Link>
          <Link
            to="/DailyJournal"
            className="h-full flex justify-center flex-1 z-10 rounded-full text-gray-900 hover:text-shadow-2xs dark:text-white items-center gap-2"
          >
            <NotebookPen />
            <span className="hidden md:block"> Daily Journal</span>
          </Link>
          <Link
            to="/Users"
            className="h-full flex justify-center flex-1 z-10 rounded-full text-gray-900 hover:text-shadow-2xs dark:text-white items-center gap-2"
          >
            <Users />
            <span className="hidden md:block"> Users</span>
          </Link>
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            className="flex justify-center items-center flex-1 z-10 border-l-2 border-l-black text-gray-900 dark:text-white dark:border-l-white gap-2"
          >
            {theme === "light" ? <Sun /> : <Moon />}
            <span className="hidden md:block"> theme</span>
          </button>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DailyJournal" element={<DailyJournal />} />
        <Route path="/Users" element={<UsersDB />} />
      </Routes>
    </>
  );
};

export default App;
