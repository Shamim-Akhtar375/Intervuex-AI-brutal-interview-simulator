"use client";

import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, Lightbulb, Target } from "lucide-react";

interface InsightPanelProps {
  isVisible: boolean;
  score: number | null;
  strengths: string[];
  weaknesses: string[];
  tips: string[];
}

export function InsightPanel({ isVisible, score, strengths, weaknesses, tips }: InsightPanelProps) {
  if (!isVisible && !score) {
    return (
      <aside className="w-80 border-l border-white/10 bg-[#121828]/50 backdrop-blur-md hidden lg:flex flex-col p-6 items-center justify-center shrink-0">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <Target className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2 text-center">Awaiting Data</h3>
        <p className="text-sm text-gray-400 text-center">Scorecard will appear here after 3 questions.</p>
      </aside>
    );
  }

  return (
    <motion.aside 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-80 border-l border-white/10 bg-[#121828]/80 backdrop-blur-xl hidden lg:flex flex-col h-full overflow-y-auto shrink-0"
    >
      <div className="p-6 border-b border-white/10 sticky top-0 bg-[#121828]/90 backdrop-blur-md z-10">
        <h2 className="font-bold text-lg flex items-center gap-2">
          <Target className="w-5 h-5 text-primary-500" />
          Live Insights
        </h2>
      </div>

      <div className="p-6 space-y-8">
        {/* Score Ring */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Background circle */}
            <svg className="w-full h-full transform -rotate-90 absolute">
              <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
            </svg>
            {/* Progress circle */}
            <motion.svg className="w-full h-full transform -rotate-90 absolute drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              <motion.circle 
                cx="64" cy="64" r="56" 
                stroke="currentColor" strokeWidth="8" fill="transparent" 
                className={score && score >= 7 ? "text-green-500" : score && score >= 5 ? "text-yellow-500" : "text-red-500"}
                strokeDasharray={351.8}
                initial={{ strokeDashoffset: 351.8 }}
                animate={{ strokeDashoffset: score ? 351.8 - (351.8 * score) / 10 : 351.8 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </motion.svg>
            <div className="absolute text-center">
              <span className="text-4xl font-bold">{score || "-"}</span>
              <span className="text-sm text-gray-400 block">/ 10</span>
            </div>
          </div>
          <p className="mt-4 text-sm font-semibold text-gray-300 uppercase tracking-widest">Overall Score</p>
        </div>

        {/* Strengths */}
        {strengths.length > 0 && (
          <div className="glass-panel p-4 rounded-xl space-y-3">
            <h3 className="font-semibold text-sm flex items-center gap-2 text-green-400">
              <TrendingUp className="w-4 h-4" />
              Strengths
            </h3>
            <ul className="space-y-2">
              {strengths.map((s, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Weaknesses */}
        {weaknesses.length > 0 && (
          <div className="glass-panel p-4 rounded-xl space-y-3 border-red-500/20 bg-red-500/5">
            <h3 className="font-semibold text-sm flex items-center gap-2 text-red-400">
              <AlertTriangle className="w-4 h-4" />
              Areas to Improve
            </h3>
            <ul className="space-y-2">
              {weaknesses.map((w, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tips */}
        {tips.length > 0 && (
          <div className="glass-panel p-4 rounded-xl space-y-3 border-primary-500/20 bg-primary-500/5">
            <h3 className="font-semibold text-sm flex items-center gap-2 text-primary-400">
              <Lightbulb className="w-4 h-4" />
              Actionable Tips
            </h3>
            <ul className="space-y-2">
              {tips.map((t, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.aside>
  );
}
