import { motion } from "framer-motion";

interface TerminalLineProps {
  prompt?: string;
  command?: string;
  output?: string;
  isTyping?: boolean;
  showCursor?: boolean;
  delay?: number;
}

const TerminalLine = ({
  prompt = "kiran@devops",
  command,
  output,
  isTyping = false,
  showCursor = false,
  delay = 0,
}: TerminalLineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay / 1000, duration: 0.3, ease: "easeOut" }}
      className="mb-2"
    >
      {command && (
        <div className="flex items-center gap-1">
          <span className="terminal-prompt">{prompt}</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-muted-foreground">$</span>
          <span className="terminal-command ml-2">
            {command}
            {isTyping && showCursor && (
              <span className="inline-block w-2 h-5 bg-terminal-cursor ml-1 cursor-blink" />
            )}
          </span>
        </div>
      )}
      {output && (
        <div className="terminal-output mt-1 pl-0">
          {output}
          {!command && showCursor && (
            <span className="inline-block w-2 h-5 bg-terminal-cursor ml-1 cursor-blink" />
          )}
        </div>
      )}
    </motion.div>
  );
};

export default TerminalLine;
