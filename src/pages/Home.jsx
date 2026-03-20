import { Link, useNavigate } from "react-router";
import { NotebookText, Globe, Palette } from "lucide-react";
import { getTime24hr } from "../services/currentDateNTime";
import HomeCard from "../components/HomeCard";


const Home = () => {
  const navigate = useNavigate();
  const currentHour = getTime24hr().split(":")[0];
  const greetings =
    currentHour < 12
      ? "Good Morning"
      : currentHour > 18
        ? "Good Evening"
        : "Good Afternoon";

  return (
      <div className="flex flex-col gap-2 pt-5 md:grid md:grid-cols-3 md:justify-center md:items-center min-h-screen pb-16 md:pb-0 md:pt-16 w-11/12 md:w-10/12 mx-auto">
        <div className="w-full md:w-5/6 md:col-span-2 p-2 md:p-8 bg-white dark:bg-card-dark rounded-lg">
          <div
            className="text-5xl md:text-6xl p-2 font-semibold text-gray-800 dark:text-white
  md:leading-14"
          >
            <h1>
              {greetings.split(" ").map((words, idx) => (
                <span key={idx} className="block">
                  {words}
                </span>
              ))}
            </h1>
          </div>
          <div className="p-2 gap-1 text-gray-800 dark:text-white">
            <p className="text-xl leading-7">
              Welcome to My <b>React Practice Workspace.</b>
            </p>
            <p className="text-lg leading-7">
              A personal project built to explore modern React patterns, state
              management, API integration, and clean UI structure.
            </p>
          </div>
          <div className="flex gap-3 items-center p-2 text-gray-900">
            <Link
              to="/DailyJournal"
              className="text-base font-medium w-max px-5 py-3 rounded-lg text-gray-50 bg-accentdeep-light hover:bg-accent-light-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover"
            >
              Go to Daily Journal &#8594;
            </Link>
            <Link
              to="/Users"
              className="text-base font-medium w-max px-5 py-3 rounded-lg text-gray-50 bg-accentdeep-light hover:bg-accent-light-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover"
            >
              Go to Users Api Integration &#8594;
            </Link>
          </div>
        </div>
        <div className="w-full col-span-3 h-px my-2 bg-linear-to-b from-gray-400 via-gray-300 dark:from-gray-500/65 dark:via-gray-400/30 to-transparent flex md:hidden"></div>
        <div className="w-full p-2 md:p-0">
          <h1 className="text-2xl font-semibold">Concepts practiced:</h1>
          <ul className="list-none text-lg leading-relaxed maxwl">
            <li className="flex items-start gap-2"><span className="text-2xl">•</span>State management using useState</li>
            <li className="flex items-start gap-2"><span className="text-2xl">•</span>Side effects with useEffect</li>
            <li className="flex items-start gap-2"><span className="text-2xl">•</span>Conditional rendering patterns</li>
            <li className="flex items-start gap-2"><span className="text-2xl">•</span>Component separation & reusability</li>
            <li className="flex items-start gap-2"><span className="text-2xl">•</span>LocalStorage persistence</li>
            <li className="flex items-start gap-2"><span className="text-2xl">•</span>API data fetching with loading & error handling</li>
            <li className="flex items-start gap-2"><span className="text-2xl">•</span>Responsive navigation structure</li>
            <li className="flex items-start gap-2"><span className="text-2xl">•</span>Theme management with Context API</li>
          </ul>
        </div>
        <div className="w-full md:col-span-3 h-px my-2 md:mt-1 md:mb-7 bg-linear-to-b from-gray-300 via-gray-200 dark:from-gray-500/65 dark:via-gray-400/30 to-transparent"></div>
        <div className="col-span-3 flex flex-col md:flex-row gap-3 md:gap-6">
          <HomeCard
            symbol={<NotebookText size={35}/>}
            heading={"Journel"}
            content={"Write, edit and store Daily thoughts using localStorage"}
            width={"w-1/3"}
            onClick={() => navigate("/DailyJournal")}
          />

          <HomeCard
            symbol={<Globe size={35}/>}
            heading={"API Handling"}
            content={"Fetch and display users with loading and error handling"}
            width={"w-1/3"}
            onClick={() => navigate("/Users")}
          />

          <HomeCard
            symbol={<Palette size={35}/>}
            heading={"Theme"}
            content={"Global theme Management using Context API"}
            width={"w-1/3"}
            onClick={() => navigate("/")}
          />
        </div>
        <div className="w-full col-span-3 h-px my-2 bg-linear-to-b from-gray-400 via-gray-300 dark:from-gray-500/65 dark:via-gray-400/30 to-transparent"></div>
        <div className="w-full col-span-3 p-2">
          <div className="text-xl font-semibold">
            <h1>What I Learned</h1>
          </div>
          <div className="text-lg">
            <ul className="grid md:grid-cols-2 gap-x-10 list-none leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-2xl">•</span>Handling browser-specific API issues (secure context)</li>
              <li className="flex items-start gap-2"><span className="text-2xl">•</span>Structuring scalable e desktop inconsistencies</li>
              <li className="flex items-start gap-2"><span className="text-2xl">•</span>Debugging mobile vs desktop inconsistencies</li>
              <li className="flex items-start gap-2"><span className="text-2xl">•</span>Managing global state using Context API</li>
            </ul>
          </div>
        </div>
        <div className="w-full col-span-3 h-px my-2 bg-linear-to-b from-gray-400 via-gray-300 dark:from-gray-500/65 dark:via-gray-400/30 to-transparent"></div>
      </div>
  );
};

export default Home;
