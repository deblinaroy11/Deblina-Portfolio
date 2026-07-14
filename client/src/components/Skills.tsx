/**
 * Technical Skills & Tools — replicates reference: 3 hover cards with circular
 * percentage gauges (teal/green/purple) that reveal a skill list on hover,
 * plus a "Core Methodologies & Testing Competencies" pill-tag card.
 */
import { Clock, RefreshCw } from "lucide-react";
import { SKILL_CARDS, METHODOLOGIES } from "@/lib/data";

const COLOR = {
  teal: {
    text: "text-teal-600",
    stroke: "#14b8a6",
    grad: "from-teal-50",
    ring: "ring-teal-100",
    pill: "text-teal-600 bg-teal-50 border-teal-100",
  },
  green: {
    text: "text-emerald-600",
    stroke: "#10b981",
    grad: "from-emerald-50",
    ring: "ring-emerald-100",
    pill: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  purple: {
    text: "text-purple-600",
    stroke: "#a855f7",
    grad: "from-purple-50",
    ring: "ring-purple-100",
    pill: "text-purple-600 bg-purple-50 border-purple-100",
  },
} as const;

const PILL_COLORS = [
  "text-blue-600 bg-blue-50 border-blue-100",
  "text-purple-600 bg-purple-50 border-purple-100",
  "text-teal-600 bg-teal-50 border-teal-100",
  "text-indigo-600 bg-indigo-50 border-indigo-100",
  "text-rose-500 bg-rose-50 border-rose-100",
  "text-emerald-600 bg-emerald-50 border-emerald-100",
  "text-amber-600 bg-amber-50 border-amber-100",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-24 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-800">
            Technical Skills &amp; Tools
          </h2>
          <p className="mt-3 text-slate-500 text-[15px] leading-relaxed">
            A specialized toolkit curated to validate functional integrity, optimize test
            execution times, and deploy bug-free software.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {SKILL_CARDS.map((card) => {
            const c = COLOR[card.color as keyof typeof COLOR];
            return (
              <div
                key={card.title}
                className={`group relative rounded-3xl border border-slate-200/80 bg-gradient-to-b ${c.grad} to-white shadow-sm hover:shadow-[0_18px_45px_rgba(37,99,235,0.13)] transition-all duration-300 overflow-hidden min-h-[380px]`}
              >
                {/* front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
                  <p className={`font-mono text-[12px] font-extrabold tracking-[0.15em] uppercase ${c.text}`}>
                    {card.title}
                  </p>
                  <div className={`relative w-36 h-36 mt-6 rounded-full ring-8 ${c.ring} ring-opacity-40`}>
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#e8edf4" strokeWidth="9" />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke={c.stroke}
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeDasharray={`${(card.percent / 100) * 263.9} 263.9`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-3xl font-black ${c.text}`}>{card.percent}%</span>
                    </div>
                  </div>
                  <div className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-4 py-1.5 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[12px] font-extrabold text-slate-700">{card.years}</span>
                    <span className="text-[11px] text-slate-400 font-semibold">Experience</span>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                    Hover to <RefreshCw className="w-3 h-3" /> see skills
                  </div>
                </div>

                {/* back */}
                <div className="absolute inset-0 flex flex-col justify-center px-7 opacity-0 scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 bg-white/95">
                  <p className={`font-mono text-[12px] font-extrabold tracking-[0.12em] uppercase ${c.text} mb-4`}>
                    {card.title}
                  </p>
                  <ul className="space-y-3.5">
                    {card.skills.map((s) => (
                      <li key={s.name}>
                        <p className="text-[13.5px] font-extrabold text-slate-800 leading-tight">
                          {s.name}
                        </p>
                        <p className="text-[12px] text-slate-400 font-medium">{s.sub}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* methodologies */}
        <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white shadow-sm p-7">
          <h4 className="font-mono text-[12px] font-extrabold tracking-[0.15em] uppercase text-slate-500">
            Core Methodologies &amp; Testing Competencies
          </h4>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {METHODOLOGIES.map((m, i) => (
              <span
                key={m}
                className={`inline-flex items-center gap-1.5 text-[12.5px] font-bold border rounded-full px-3.5 py-1.5 ${PILL_COLORS[i % PILL_COLORS.length]}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
