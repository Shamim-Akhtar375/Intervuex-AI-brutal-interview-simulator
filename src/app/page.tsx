"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Trophy, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Nav */}
      <header className="px-8 py-6 flex items-center justify-between relative z-10 glass-panel border-x-0 border-t-0 border-white/5">
        <div className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-primary-500" />
          <span className="font-bold text-xl tracking-tight">IntervueX<span className="text-primary-500">.ai</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How it works</Link>
          <Link href="/interview" className="text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors border border-white/10">Sign In</Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10 mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-xs font-semibold uppercase tracking-wider mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Next-Gen Interview Prep</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 max-w-4xl"
        >
          I’ll take your interview <br className="hidden md:block"/>
          <span className="text-gradient">before companies do.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12"
        >
          Practice. Get judged. Improve fast. Experience real technical interviews with an AI that doesn't sugarcoat reality.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md"
        >
          <Link 
            href="/interview" 
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.7)] hover:-translate-y-1"
          >
            Start Interview
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="#demo" 
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white/80 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            Watch Demo
          </Link>
        </motion.div>

        {/* Quick Actions / Features grid below hero */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-24 mb-24"
        >
          <Link href="/interview" className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Top Interview Questions</h3>
            <p className="text-sm text-gray-400">Curated from real FAANG interviews across multiple roles.</p>
          </Link>
          <Link href="/interview" className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-primary-500/20 text-primary-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Improve My Resume</h3>
            <p className="text-sm text-gray-400">AI analysis to bulletproof your resume for ATS systems.</p>
          </Link>
          <Link href="/interview" className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-accent-500/20 text-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Career Roadmap</h3>
            <p className="text-sm text-gray-400">Personalized learning paths to reach your dream role.</p>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
