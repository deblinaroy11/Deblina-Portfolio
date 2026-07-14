/**
 * Sticky top nav — replicates reference: avatar + name + tiny uppercase subtitle
 * on the left, section links + solid blue Resume pill on the right.
 */
import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { PROFILE } from "@/lib/data";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(37,99,235,0.08)]"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3 min-w-0">
          <span className="relative shrink-0">
            <img
              src={PROFILE.avatar}
              alt={PROFILE.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-white" />
          </span>
          <span className="flex flex-col leading-tight min-w-0">
            <span className="font-extrabold text-slate-900 text-[15px] truncate">
              {PROFILE.name}
            </span>
            <span className="font-mono text-[9px] tracking-[0.18em] text-blue-600 font-semibold uppercase">
              {PROFILE.navSubtitle}
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-[13.5px] font-semibold text-slate-600 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-bold px-4 py-2 rounded-lg shadow-sm shadow-blue-200 transition-all active:scale-[0.97]"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-lg">
          <div className="container py-3 flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-600"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white text-sm font-bold px-4 py-2.5 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
