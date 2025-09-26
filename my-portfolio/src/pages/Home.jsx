import React, { useState, useEffect } from "react";
import Terminal from "../components/Terminal";

const Home = () => {
  // 🕒 State for date and time
  const [dateTime, setDateTime] = useState(new Date());

  // ⏳ Update every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="h-screen flex flex-col bg-black text-green-600">
      <header className="p-3">
        <h1 className="font-serif text-xl font-bold">Jane Waguthi</h1>
        <h2 className="font-serif text-sm text-gray-400">Software Engineer</h2>
        <hr className="border-t border-green-500 mt-2" />
      </header>

      <main className="flex flex-1 overflow-hidden">
        <div className="p-4 flex-shrink-0">
          <img
            src="passport.jpg"
            alt="Description of image"
            className="w-60 h-72 rounded-2xl shadow-xl object-cover"
          />
          
        </div>
         <div className="w-px bg-green-500 mx-2"></div>
        
        <div className="flex-1 p-6 overflow-auto">
          
          <nav className="flex flex-wrap gap-4 mb-4 text-green">
            <a>help</a>
            <span>|</span>
            <a>about</a>
            <span>|</span>
            <a>projects</a>
            <span>|</span>
            <a>skills</a>
            <span>|</span>
            <a>experience</a>
            <span>|</span>
            <a>contact</a>
            <span>|</span>
            <a>education</a>
            <span>|</span>
            <a>certification</a>
            <span>|</span>
            <a>clear</a>
          </nav>
          <hr></hr>

          <Terminal />
        </div>
      </main>

      <footer className="p-2 border-t border-green-500 text-sm flex justify-between items-center">
        <p>@Jane Mathenge | All Rights Reserved</p>
        <p className="text-gray-400">
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
         </p>
      </footer>
    </div>
  );
};

export default Home;
