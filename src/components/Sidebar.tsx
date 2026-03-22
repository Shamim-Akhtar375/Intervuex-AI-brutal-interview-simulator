"use client";

import { MessageSquare, LayoutDashboard, Settings, User, LogOut, Flame } from "lucide-react";

interface SidebarProps {
  isBrutal: boolean;
  setIsBrutal: (v: boolean) => void;
}

export function Sidebar({ isBrutal, setIsBrutal }: SidebarProps) {
  return (
    <aside className="w-64 border-r border-white/10 bg-[#121828]/50 backdrop-blur-md flex flex-col h-full shrink-0">
      <div className="p-6 border-b border-white/10">
        <h2 className="font-bold text-xl flex items-center gap-2">
          <Flame className={`w-6 h-6 ${isBrutal ? "text-red-500" : "text-primary-500"}`} />
          IntervueX<span className={isBrutal ? "text-red-500" : "text-primary-500"}>.ai</span>
        </h2>
      </div>

      <div className="p-4 flex-1 overflow-y-auto space-y-2">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-4 px-2">Menu</div>
        <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors bg-white/5">
          <MessageSquare className="w-4 h-4 text-primary-500" />
          Active Interview
        </button>
        <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </button>
        <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
          <User className="w-4 h-4" />
          Profile
        </button>
      </div>

      <div className="p-6 border-t border-white/10 space-y-4">
        <div className="flex items-center justify-between bg-black/20 p-3 rounded-xl border border-white/5">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-400 uppercase">Mode</span>
            <span className={`text-sm font-bold ${isBrutal ? "text-red-500" : "text-green-500"}`}>
              {isBrutal ? "Brutal" : "Normal"}
            </span>
          </div>
          <button 
            onClick={() => setIsBrutal(!isBrutal)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isBrutal ? "bg-red-500" : "bg-green-500"}`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isBrutal ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>
        
        <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
          <LogOut className="w-4 h-4" />
          Exit Interview
        </button>
      </div>
    </aside>
  );
}
