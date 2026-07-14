/**
 * Education — replicates reference: label pill, H2, 3 cards with icon, degree,
 * field, institution, location, status badges and year at bottom.
 */
import { EDUCATION } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-[11px] font-extrabold tracking-wider uppercase text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-4 py-1.5">
            Academic Background
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black text-slate-800">
            Education &amp; Achievements
          </h2>
          <p className="mt-3 text-slate-500 text-[15px]">
            Academic foundation and recognitions that shaped a disciplined, analytical approach
            to software quality engineering.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {EDUCATION.map((ed) => (
            <div
              key={ed.title}
              className="flex flex-col rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50/70 to-white p-7 shadow-sm hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-2xl">
                {ed.icon}
              </div>
              <h3 className="mt-4 text-[17px] font-black text-slate-800 leading-snug">
                {ed.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] font-semibold text-slate-500">{ed.field}</p>
              <p className="mt-2 text-[13.5px] font-bold text-blue-600">{ed.institution}</p>
              <p className="text-[12.5px] text-slate-400 font-medium">{ed.location}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[11px] font-extrabold text-slate-500 bg-slate-100 border border-slate-200 rounded-full px-3 py-1">
                  {ed.badge}
                </span>
                <span className="text-[11px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
                  {ed.status}
                </span>
              </div>

              <div className="mt-auto pt-5">
                <span className="font-mono text-[12.5px] font-extrabold text-slate-400">
                  {ed.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
