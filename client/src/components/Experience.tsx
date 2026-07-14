/**
 * Professional Journey — replicates reference: label pill, H2, vertical timeline
 * dot + card with role, company, Client: Meta badge, dates, location, ✓ bullets
 * with bold highlights.
 */
import { CheckCircle2, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-extrabold text-slate-800">
        {p}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export default function Experience() {
  const e = EXPERIENCE;
  return (
    <section id="experience" className="py-20 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-[11px] font-extrabold tracking-wider uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5">
            Work History
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black text-slate-800">
            Professional Journey
          </h2>
          <p className="mt-3 text-slate-500 text-[15px]">
            Dedicated testing tenure validating critical releases for industry leaders.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto relative pl-6 sm:pl-10">
          {/* timeline line + dot */}
          <div className="absolute left-1.5 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-blue-300 via-blue-100 to-transparent" />
          <div className="absolute left-0 sm:left-1.5 top-2 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-blue-100" />

          <div className="rounded-3xl border border-slate-200/80 bg-white shadow-[0_10px_35px_rgba(37,99,235,0.08)] p-7 sm:p-9 hover:shadow-[0_18px_45px_rgba(37,99,235,0.13)] transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-800">
                  {e.role}
                  <span className="ml-2 align-middle text-[10.5px] font-extrabold text-slate-500 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5">
                    {e.type}
                  </span>
                </h3>
                <p className="mt-1 text-blue-600 font-extrabold text-[15px]">{e.company}</p>
                <span className="mt-2 inline-block text-[11px] font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md px-2.5 py-1">
                  Client: {e.client}
                </span>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="font-mono text-[12.5px] font-extrabold text-blue-600">{e.period}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-[12.5px] font-semibold text-slate-500">
                  <MapPin className="w-3.5 h-3.5" /> {e.location}
                </p>
              </div>
            </div>

            <p className="mt-5 text-[14.5px] text-slate-600 leading-relaxed">{e.intro}</p>

            <ul className="mt-5 space-y-3.5">
              {e.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-[18px] h-[18px] text-emerald-500 shrink-0 mt-0.5" />
                  <span>{renderBold(b)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
