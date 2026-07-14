/**
 * Footer — replicates reference: name, copyright, LinkedIn/GitHub icons,
 * version badge.
 */
import { Github, Linkedin } from "lucide-react";
import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-extrabold text-white text-[16px]">{PROFILE.name}</p>
          <p className="text-[12.5px] text-slate-400 mt-1">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-600 flex items-center justify-center transition-colors"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
            Version
          </span>
          <span className="font-mono text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
            v1.0 Live
          </span>
        </div>
      </div>
    </footer>
  );
}
