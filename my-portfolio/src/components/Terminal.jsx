import React, { useState } from "react";

const Terminal = () => {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    { input: "welcome", output: "Hi, i'm Jane Waguthi a Backend Developer | Technical Writer  welocome to my AI powered portfolio type \"help\" to see the available commands" }
  ]);

  // Command handler
  const handleCommand = (e) => {
    e.preventDefault();

    let output = "";
    if (command.toLowerCase() === "whoami") {
      output = "Jane Waguthi - Backend Developer | Technical Writer";
    } else if (command.toLowerCase() === "help") {
      output = "Available commands: whoami, help, about, clear";
    } else if (command.toLowerCase() === "about") {
      output = "I specialize in backend development, APIs, and technical writing.";
    } else if (command.toLowerCase() === "clear") {
      setHistory([]);
      setCommand("");
      return;
    } else {
      output = `command not found: ${command}`;
    }

    setHistory([...history, { input: command, output }]);
    setCommand("");
  };

  return (
    <div className="text-green-400 font-mono p-3 rounded-lg  w-full max-w-2xl ">
      {history.map((item, index) => (
        <div key={index}>
          <p>
            <span className="text-blue-500">jane@portfolio</span>
            <span className="text-white">:~$</span> {item.input}
          </p>
          <p>{item.output}</p>
        </div>
      ))}

      {/* Input area */}
      <form onSubmit={handleCommand}>
        <span className="text-blue-500">jane@portfolio</span>
        <span className="text-white">:~$</span>{" "}
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className=" outline-none text-green-400 w-80"
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal;