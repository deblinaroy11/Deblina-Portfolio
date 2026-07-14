/**
 * Core Testing Expertise — replicates reference: pill label, H2, 4 hover-expand
 * cards with emoji icon, description, checkmark points, "Hover to expand ▼".
 */
import { EXPERTISE } from "@/lib/data";

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 lg:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-[11px] font-extrabold tracking-wider uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
            Quality Assurance Domain
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black text-slate-800">
            Core Testing Expertise
          </h2>
          <p className="mt-3 text-slate-500 text-[15px] leading-relaxed">
            A solid foundation in structured testing methodologies, covering every critical
            phase of the software testing life cycle (STLC).
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXPERTISE.map((e, idx) => (
            <div
              key={e.title}
              className={`group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] ${
                ["border-blue-200", "border-indigo-200", "border-teal-200", "border-purple-200"][
                  idx % 4
                ]
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl">
                {e.icon}
              </div>
              <h4 className="mt-4 font-extrabold text-slate-800 text-[16px]">{e.title}</h4>
              <p className="mt-2 text-[13px] text-slate-500 leading-relaxed">{e.description}</p>

              <ul className="mt-3 space-y-1.5 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
                {e.points.map((p) => (
                  <li key={p} className="flex items-start gap-1.5 text-[12.5px] font-semibold text-slate-600">
                    <span className="text-emerald-500 font-black">✓</span> {p}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[10.5px] font-bold tracking-wide text-slate-300 uppercase group-hover:opacity-0 transition-opacity">
                Hover to expand ▼
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
