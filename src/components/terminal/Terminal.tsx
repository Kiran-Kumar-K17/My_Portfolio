import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TerminalLine from "./TerminalLine";
import { terminalCommands } from "@/lib/data";

const Terminal = () => {
  const [displayedLines, setDisplayedLines] = useState<typeof terminalCommands>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex >= terminalCommands.length) {
      setIsTyping(false);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, terminalCommands[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
    }, terminalCommands[currentIndex]?.delay || 800);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="terminal w-full max-w-3xl mx-auto"
    >
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="ml-4 text-muted-foreground text-sm font-mono">
          kiran@devops:~
        </span>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body min-h-[280px]">
        {/* Initial welcome message */}
        <TerminalLine
          output="Welcome to Kiran Kumar's Portfolio Terminal v1.0.0"
          delay={0}
        />
        <TerminalLine
          output="Type 'help' for available commands..."
          delay={200}
        />
        <div className="h-4" />

        {/* Dynamic command lines */}
        {displayedLines.map((line, index) => (
          <div key={index}>
            <TerminalLine
              command={line.command}
              delay={0}
            />
            <TerminalLine
              output={line.output}
              delay={100}
            />
            <div className="h-2" />
          </div>
        ))}

        {/* Blinking cursor at the end */}
        {!isTyping && (
          <div className="flex items-center gap-1 mt-4">
            <span className="terminal-prompt">kiran@devops</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-muted-foreground">$</span>
            <span className="inline-block w-2.5 h-5 bg-terminal-cursor ml-2 cursor-blink" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;
