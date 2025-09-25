import React, { useState } from "react";
import commands from "./commands"; // import your commands

const Terminal = () => {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    {
      input: "welcome",
      output:
        'Hi, I\'m Jane Waguthi a Backend Developer | Technical Writer. Welcome to my AI powered portfolio. Type "help" to see the available commands',
    },
  ]);

  // Command handler
  const handleCommand = (e) => {
    e.preventDefault();
    let output = "";

    if (command.toLowerCase() === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const cmd = commands[command.toLowerCase()];
    output = cmd ? cmd() : `command not found: ${command}`;

    setHistory([...history, { input: command, output }]);
    setCommand("");
  };

  return (
    <div className="text-green-400 font-mono p-3 rounded-lg w-full max-w-2xl">
      {history.map((item, index) => (
        <div key={index}>
          <p>
            <span className="text-blue-500">jane@portfolio</span>
            <span className="text-white">:~$</span> {item.input}
          </p>
          <div className="text-white  whitespace-pre-line">{item.output}</div>
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
          className="outline-none text-green-400 w-80"
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal;
