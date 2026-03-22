"use client";

import { motion } from "framer-motion";
import { Copy, Bot, User, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type Message = {
  id: string;
  role: "user" | "ai";
  content: string;
};

interface ChatAreaProps {
  messages: Message[];
  isThinking: boolean;
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  isBrutal: boolean;
}

export function ChatArea({ messages, isThinking, value, onChange, onSubmit, isBrutal }: ChatAreaProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex-1 flex flex-col h-full relative bg-[#0B0F19]">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-2xl ${isBrutal ? 'bg-red-500/20 text-red-500' : 'bg-primary-500/20 text-primary-500'}`}>
              <Bot className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Ready to begin?</h3>
            <p className="text-gray-400 mb-8">
              I am simulating an Ex-Google SDE interviewer. Take a deep breath, and let&apos;s evaluate your skills.
            </p>
            <div className="flex flex-col gap-2 w-full">
              <button 
                onClick={() => { onChange("I'm ready to start the interview for Software Engineer."); onSubmit(); }}
                className="p-3 text-sm rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all text-left flex justify-between items-center group"
              >
                <span>&quot;I&apos;m ready to start the SDE interview.&quot;</span>
                <Sparkles className="w-4 h-4 text-gray-500 group-hover:text-primary-500" />
              </button>
              <button 
                onClick={() => { onChange("Let's do a mock interview for Data Analyst."); onSubmit(); }}
                className="p-3 text-sm rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all text-left flex justify-between items-center group"
              >
                <span>&quot;Let&apos;s do a mock interview for Data Analyst.&quot;</span>
                <Sparkles className="w-4 h-4 text-gray-500 group-hover:text-primary-500" />
              </button>
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
              msg.role === "ai" ? (isBrutal ? "bg-red-500/20 text-red-500" : "bg-primary-500/20 text-primary-500") : "bg-accent-500/20 text-accent-500"
            )}>
              {msg.role === "ai" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
            </div>

            <div className={cn(
              "max-w-[80%] rounded-2xl px-5 py-3 relative group",
              msg.role === "user" 
                ? "bg-accent-600 text-white rounded-tr-none" 
                : "bg-surface border border-white/5 text-gray-100 rounded-tl-none whitespace-pre-wrap"
            )}>
              {msg.content}
              
              {msg.role === "ai" && (
                <button 
                  onClick={() => copyToClipboard(msg.content, msg.id)}
                  className="absolute -right-10 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-2 text-gray-400 hover:text-white"
                  title="Copy message"
                >
                  {copiedId === msg.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>
          </motion.div>
        ))}

        {isThinking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-4"
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
              isBrutal ? "bg-red-500/20 text-red-500" : "bg-primary-500/20 text-primary-500"
            )}>
              <Bot className="w-5 h-5" />
            </div>
            <div className="bg-surface border border-white/5 text-gray-100 rounded-2xl rounded-tl-none px-5 py-4 flex items-center gap-1.5">
              <span className="text-sm text-gray-400 font-medium">Interviewer is typing</span>
              <span className="flex gap-0.5">
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-white/10 bg-[#0B0F19]/80 backdrop-blur-md shrink-0">
        <form 
          onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
          className="relative max-w-4xl mx-auto flex items-end gap-2 bg-[#1e293b] rounded-2xl border border-white/10 p-2 focus-within:border-primary-500/50 focus-within:ring-2 focus-within:ring-primary-500/20 transition-all shadow-lg"
        >
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type your answer... (Be specific and clear)"
            className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 resize-none px-3 py-2 min-h-[44px] max-h-32 focus:outline-none"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSubmit();
              }
            }}
          />
          <button 
            type="submit"
            disabled={!value.trim() || isThinking}
            className="p-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary-500/20 transition-all shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </button>
        </form>
        <div className="text-center mt-2 text-xs text-gray-500">
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded-md border border-white/20">Enter</kbd> to send, <kbd className="px-1.5 py-0.5 bg-white/10 rounded-md border border-white/20">Shift</kbd> + <kbd className="px-1.5 py-0.5 bg-white/10 rounded-md border border-white/20">Enter</kbd> for new line.
        </div>
      </div>
    </div>
  );
}
