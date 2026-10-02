"use client";

import { motion } from "framer-motion";

export default function CodeCard() {
  return (
    <div className="card w-[380px] sm:w-[420px] rounded-xl overflow-hidden border border-border/60 bg-[#161412] text-xs font-mono shadow-2xl">
      {/* Window bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/40 bg-[#1e1b18]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e2725b]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f5a83c]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#52b788]/80" />
        </div>
        <span className="text-muted/60 text-[11px]">chirag.ts</span>
        <div className="w-10" />
      </div>

      {/* Code body */}
      <div className="p-4 leading-relaxed font-mono">
        <p className="text-muted/40 mb-2">// chirag.ts</p>
        <p>
          <span className="text-[#f5a83c]">const</span>{" "}
          <span className="text-foreground">chirag</span> = {"{"}
        </p>
        <div className="pl-4 space-y-1 my-1">
          <p>
            <span className="text-muted">role:</span>{" "}
            <span className="text-[#52b788]">&quot;software engineer&quot;</span>,
          </p>
          <p>
            <span className="text-muted">stack:</span> [
            <span className="text-[#52b788]">&quot;next.js&quot;</span>,{" "}
            <span className="text-[#52b788]">&quot;ts&quot;</span>,{" "}
            <span className="text-[#52b788]">&quot;react-flow&quot;</span>,{" "}
            <span className="text-[#52b788]">&quot;prisma&quot;</span>,{" "}
            <span className="text-[#52b788]">&quot;python&quot;</span>],
          </p>
          <p>
            <span className="text-muted">currently:</span>{" "}
            <span className="text-[#52b788]">&quot;building full-stack &amp; ai tools&quot;</span>,
          </p>
          <p>
            <span className="text-muted">likes:</span>{" "}
            <span className="text-[#52b788]">&quot;Solving Real World Problems&quot;</span>,
          </p>
          <p>
            <span className="text-muted">ships:</span>{" "}
            <span className="text-[#52b788]">&quot;clean code that survives prod&quot;</span>,
          </p>
        </div>
        <p className="text-foreground">{"};"}</p>
        <p className="mt-3">
          <span className="text-[#f5a83c]">export default</span>{" "}
          <span className="text-foreground">chirag</span>;
        </p>
      </div>

      {/* Footer bar */}
      <div className="px-4 py-2 border-t border-border/40 bg-[#1e1b18] text-[10px] text-muted/50 flex justify-between">
        <span>typescript · 0 problems</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
}