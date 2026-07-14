/**
 * Hero section — replicates reference: left column with typewriter H1, working-on
 * marquee, open-to-work badge, intro, Meta client card, CTA buttons, social icons;
 * right column with Build Environment pills and QA TEST REPORT dashboard card.
 */
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Download,
  Send,
  Zap,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import {
  PROFILE,
  TYPEWRITER_WORDS,
  WORKING_ON_TAGS,
  HERO_INTRO,
  META_CARD,
  QA_REPORT,
} from "@/lib/data";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1800;
    else if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words]);

  return text;
}

const SOCIALS = [
  {
    href: PROFILE.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    cls: "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white",
  },
  {
    href: PROFILE.github,
    icon: Github,
    label: "GitHub",
    cls: "bg-slate-200 text-slate-700 hover:bg-slate-800 hover:text-white",
  },
  {
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
    label: "Email",
    cls: "bg-red-100 text-red-500 hover:bg-red-500 hover:text-white",
  },
  {
    href: `https://wa.me/${PROFILE.phoneRaw}`,
    icon: MessageCircle,
    label: "WhatsApp",
    cls: "bg-green-100 text-green-600 hover:bg-green-600 hover:text-white",
  },
];

const VERSIONS = [
  { v: "v1.0", label: "Live", badge: "ACTIVE", active: true },
  { v: "v2.0", label: "RC", badge: "", active: false },
  { v: "v3.0", label: "Dev", badge: "NEW", active: false },
];

export default function Hero() {
  const typed = useTypewriter(TYPEWRITER_WORDS);

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl" />

      <div className="container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-start">
        {/* ===== Left column ===== */}
        <div className="min-w-0">
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black text-blue-600 leading-[1.1] min-h-[88px] sm:min-h-[70px] lg:min-h-[80px] break-words">
            {typed}
            <span className="animate-caret text-blue-400">|</span>
          </h1>

          {/* Working On marquee */}
          <div className="mt-6 flex items-center gap-0 max-w-xl rounded-full border border-blue-100 bg-white shadow-sm overflow-hidden">
            <span className="shrink-0 flex items-center gap-1.5 pl-4 pr-3 py-2 text-[11px] font-extrabold tracking-wide text-amber-600 uppercase bg-amber-50 rounded-l-full border-r border-amber-100">
              <Zap className="w-3.5 h-3.5" /> Working On
            </span>
            <div className="relative flex-1 overflow-hidden py-2">
              <div className="flex w-max animate-marquee gap-2 pl-2">
                {[...WORKING_ON_TAGS, ...WORKING_ON_TAGS].map((t, i) => (
                  <span
                    key={i}
                    className="shrink-0 text-[11px] font-bold text-slate-600 bg-slate-100 rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Open to work */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-soft-pulse" />
            <span className="text-[13px] font-extrabold text-green-700">Open to Work</span>
          </div>

          {/* Intro */}
          <p className="mt-6 text-[16.5px] leading-relaxed text-slate-600 max-w-xl">
            Hi, I'm{" "}
            <span
              className="font-extrabold text-blue-600 cursor-pointer"
              title="Click to learn more about me!"
            >
              {PROFILE.name}
            </span>
            , a <span className="font-extrabold text-slate-800">{HERO_INTRO.boldRole}</span>{" "}
            {HERO_INTRO.text}
          </p>

          {/* Meta client card */}
          <div className="mt-6 max-w-xl rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50/50 p-4 flex gap-4 items-start shadow-sm">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-200">
              ∞
            </div>
            <div className="min-w-0">
              <p className="text-[10.5px] font-extrabold tracking-wider uppercase text-blue-600">
                {META_CARD.label} • <span className="text-indigo-500">{META_CARD.sublabel}</span>
              </p>
              <p className="font-extrabold text-slate-900 text-[15px] mt-0.5">
                {META_CARD.title}
              </p>
              <p className="text-[13px] text-slate-500 mt-1 leading-snug">
                {META_CARD.description}
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.97]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-blue-200 text-blue-700 hover:border-blue-500 hover:bg-blue-50 font-bold text-sm px-6 py-[10px] rounded-xl transition-all active:scale-[0.97]"
            >
              <Send className="w-4 h-4" />
              Get in Touch
            </a>
            <div className="flex items-center gap-2.5 ml-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all active:scale-[0.95] shadow-sm ${s.cls}`}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Right column ===== */}
        <div className="w-full max-w-lg lg:ml-auto min-w-0 mx-auto">
          {/* Build environment */}
          <div className="text-center">
            <p className="font-mono text-[10px] tracking-[0.35em] text-slate-400 font-bold uppercase mb-3">
              Build Environment
            </p>
            <div className="flex items-center justify-center gap-2.5 flex-wrap">
              {VERSIONS.map((ver) => (
                <button
                  key={ver.v}
                  className={`font-mono text-[12px] font-bold px-4 py-1.5 rounded-full border transition-all ${
                    ver.active
                      ? "bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-200"
                      : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {ver.v} {ver.label}
                  {ver.badge && (
                    <span
                      className={`ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full font-extrabold ${
                        ver.active ? "bg-white/25 text-white" : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {ver.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
            {/* orange marquee strip */}
            <div className="mt-3 mx-auto max-w-md overflow-hidden rounded-lg border border-dashed border-orange-200 bg-orange-50/60 py-1.5">
              <div className="flex w-max animate-marquee-slow gap-10">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="shrink-0 text-[11px] font-bold text-orange-500 whitespace-nowrap"
                  >
                    ✦ Update to v3.0 to explore New Features 🚀
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* QA TEST REPORT card */}
          <div className="mt-6 rounded-3xl bg-white shadow-[0_20px_60px_rgba(37,99,235,0.15)] border border-blue-100/70 overflow-hidden animate-float-slow">
            {/* header */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <BarChart3 className="w-4.5 h-4.5 text-white" />
                </span>
                <span className="font-mono text-[13px] font-extrabold tracking-widest text-white">
                  QA TEST REPORT
                </span>
              </div>
              <span className="font-mono text-[10px] font-bold text-teal-700 bg-white rounded-full px-3 py-1 shadow-sm">
                {QA_REPORT.company}
              </span>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-4">
                {/* pass rate ring */}
                <div className="relative w-24 h-24 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="url(#heroRing)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${(QA_REPORT.passRate / 100) * 263.9} 263.9`}
                    />
                    <defs>
                      <linearGradient id="heroRing" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-black text-slate-800">
                      {QA_REPORT.passRate}%
                    </span>
                    <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wide">
                      Stability
                    </span>
                  </div>
                </div>

                {/* stat tiles */}
                <div className="grid grid-cols-3 gap-2 flex-1">
                  {QA_REPORT.stats.map((s) => (
                    <div
                      key={s.label}
                      className={`rounded-xl px-2 py-3 text-center border ${
                        s.color === "blue"
                          ? "bg-blue-50 border-blue-100"
                          : s.color === "red"
                            ? "bg-rose-50 border-rose-100"
                            : "bg-emerald-50 border-emerald-100"
                      }`}
                    >
                      <p
                        className={`text-lg font-black leading-none ${
                          s.color === "blue"
                            ? "text-blue-600"
                            : s.color === "red"
                              ? "text-rose-500"
                              : "text-emerald-600"
                        }`}
                      >
                        {s.value}
                      </p>
                      <p className="text-[9.5px] font-bold text-slate-500 mt-1 leading-tight">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* progress bars */}
              <div className="mt-5 space-y-3.5">
                {QA_REPORT.bars.map((b) => {
                  const pct = Math.round((b.done / b.total) * 100);
                  return (
                    <div key={b.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12px] font-bold text-slate-600">{b.label}</span>
                        <span className="font-mono text-[11px] font-bold text-slate-400">
                          {b.done}/{b.total}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            pct === 100
                              ? "bg-gradient-to-r from-emerald-400 to-teal-500"
                              : "bg-gradient-to-r from-blue-400 to-indigo-500"
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-100 px-3 py-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <p className="text-[11.5px] font-semibold text-slate-500">
                  30+ VR OS releases supported at Meta Reality Labs with zero critical defects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
