/**
 * Featured QA Projects — replicates reference: label pill, H2, 2 cards with tag +
 * date row, title, Client badge, description, dot bullets.
 */
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-24 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-[11px] font-extrabold tracking-wider uppercase text-teal-600 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5">
            Portfolio Work
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black text-slate-800">
            Featured QA Projects
          </h2>
          <p className="mt-3 text-slate-500 text-[15px]">
            In-depth look at major validation work and cross-platform testing environments
            built for scale.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((p, idx) => (
            <div
              key={p.title}
              className={`rounded-3xl border bg-white p-7 sm:p-8 shadow-sm hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 border-t-4 ${
                idx === 0 ? "border-t-blue-500 border-slate-200/80" : "border-t-purple-500 border-slate-200/80"
              }`}
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span
                  className={`text-[11px] font-extrabold rounded-md px-3 py-1 border ${
                    idx === 0
                      ? "text-blue-600 bg-blue-50 border-blue-100"
                      : "text-purple-600 bg-purple-50 border-purple-100"
                  }`}
                >
                  {p.tag}
                </span>
                <span className="font-mono text-[11.5px] font-bold text-slate-400">
                  {p.period}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-black text-slate-800 leading-snug">{p.title}</h3>
              <span className="mt-2.5 inline-block text-[11px] font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-md px-2.5 py-1">
                Client: {p.client}
              </span>

              <p className="mt-4 text-[14px] text-slate-600 leading-relaxed">{p.description}</p>

              <ul className="mt-4 space-y-2.5">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-500 leading-relaxed">
                    <span
                      className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${
                        idx === 0 ? "bg-blue-400" : "bg-purple-400"
                      }`}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
