/**
 * Let's Connect — replicates reference: left column Email/Phone/Location tiles
 * with copy-email button; right "File a Connection Ticket" form card with
 * File Ticket (mailto), Send Email and Send WhatsApp actions.
 */
import { useState } from "react";
import { Copy, Check, Mail, Phone, MapPin, Send, MessageCircle, Ticket } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy email");
    }
  };

  const fileTicket = () => {
    const subject = encodeURIComponent(`🎟️ Connection Request — ${name || "Recruiter"}`);
    const body = encodeURIComponent(
      `Hi Deblina,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const waText = encodeURIComponent(
    `Hi Deblina! I'm ${name || "a Recruiter"} (${email}).\n\nMessage: ${msg}`,
  );

  return (
    <section id="contact" className="py-20 lg:py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-800">Let's Connect</h2>
          <p className="mt-3 text-slate-500 text-[15px] leading-relaxed">
            Whether you're looking to hire a meticulous QA Engineer to strengthen your testing
            pipeline, or just want to discuss modern testing practices, feel free to reach out!
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* left — contact info */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 flex items-center gap-4 shadow-sm">
              <span className="w-11 h-11 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-slate-400">
                  Email
                </p>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-[14.5px] font-bold text-slate-700 hover:text-blue-600 break-all"
                >
                  {PROFILE.email}
                </a>
              </div>
              <button
                onClick={copyEmail}
                aria-label="Copy email"
                className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 flex items-center gap-4 shadow-sm">
              <span className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-slate-400">
                  Phone
                </p>
                <a
                  href={`tel:+${PROFILE.phoneRaw}`}
                  className="text-[14.5px] font-bold text-slate-700 hover:text-blue-600"
                >
                  {PROFILE.phone}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 flex items-start gap-4 shadow-sm">
              <span className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-slate-400">
                  Location
                </p>
                <a
                  href="https://maps.google.com/?q=Kolkata,+West+Bengal,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14.5px] font-bold text-slate-700 hover:text-blue-600"
                >
                  {PROFILE.location}
                </a>
                <p className="text-[12.5px] text-slate-400 font-medium mt-0.5">
                  Open to relocation &amp; remote opportunities
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/50 p-5">
              <p className="text-[13px] text-slate-600 font-semibold leading-relaxed">
                💼 Currently an <span className="text-blue-700 font-extrabold">Associate Test Engineer at Tech Mahindra</span>{" "}
                working on Meta Reality Labs — always happy to talk about QA, automation, and
                VR testing.
              </p>
            </div>
          </div>

          {/* right — ticket form */}
          <div className="rounded-3xl border border-slate-200/80 bg-white shadow-[0_15px_45px_rgba(37,99,235,0.10)] overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-white font-extrabold text-[14px]">
                <Ticket className="w-4.5 h-4.5" /> File a Connection Ticket
              </span>
              <span className="font-mono text-[10px] font-bold text-blue-100 bg-white/15 rounded-full px-3 py-1">
                PROJECT-QA-DEBLINA
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-[11.5px] font-extrabold uppercase tracking-wide text-slate-500">
                  Reporter Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-[14px] font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                />
              </div>
              <div>
                <label className="text-[11.5px] font-extrabold uppercase tracking-wide text-slate-500">
                  Reporter Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-[14px] font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                />
              </div>
              <div>
                <label className="text-[11.5px] font-extrabold uppercase tracking-wide text-slate-500">
                  Ticket Description (Message)
                </label>
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  rows={4}
                  placeholder="Describe the opportunity, interview offer, or project details..."
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-[14px] font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all resize-none"
                />
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <button
                  onClick={fileTicket}
                  className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[13.5px] px-4 py-2.5 rounded-xl shadow-md shadow-blue-200 transition-all active:scale-[0.97]"
                >
                  <Ticket className="w-4 h-4" /> File Ticket
                </button>
                <a
                  href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("🎟️ Connection Request — Recruiter")}&body=${encodeURIComponent("Hi Deblina,\n\nName: \nEmail: \n\nMessage:\n")}`}
                  className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-600 hover:text-blue-700 font-bold text-[13.5px] px-4 py-2 rounded-xl transition-all active:scale-[0.97]"
                >
                  <Send className="w-4 h-4" /> Send Email
                </a>
                <a
                  href={`https://wa.me/${PROFILE.phoneRaw}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 border-2 border-green-200 hover:border-green-400 hover:bg-green-50 text-green-600 font-bold text-[13.5px] px-4 py-2 rounded-xl transition-all active:scale-[0.97]"
                >
                  <MessageCircle className="w-4 h-4" /> Send WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
