import { useState } from "react";
import { ArrowUpRight, Zap, Globe, Shield, BarChart3, Users, Sparkles, ArrowRight, Play, Star } from "lucide-react";

const stats = [
  { value: "2.4M", label: "Active Users", delta: "+18% this month" },
  { value: "99.9%", label: "Uptime SLA", delta: "Guaranteed" },
  { value: "$12B", label: "Processed", delta: "Last 30 days" },
];

const features = [
  { icon: Zap, title: "Instant Deploy", desc: "Ship in seconds with zero-downtime deployments and atomic rollbacks built in." },
  { icon: Globe, title: "Global Edge", desc: "200+ nodes worldwide. Your users get sub-10ms latency wherever they are." },
  { icon: Shield, title: "Bank-grade Security", desc: "SOC 2 Type II, ISO 27001. End-to-end encryption by default." },
];

const testimonials = [
  { name: "Arya Wijaya", role: "CTO, Telkom Digital", text: "We cut deployment time from 45 minutes to 90 seconds. This is the future of infrastructure." },
  { name: "Sofia Tan", role: "Founder, Ruangguru", text: "Our team ships 3× faster now. The developer experience is unmatched." },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
            <Sparkles size={14} className="text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground tracking-tight">Volta</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {["Product", "Pricing", "Docs", "Blog"].map((item) => (
            <a key={item} href="#" className="hover:text-foreground transition-colors">{item}</a>
          ))}
        </div>
        <button className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Get started
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-[minmax(120px,auto)]">

          {/* Hero Card — spans full width */}
          <div className="md:col-span-8 row-span-3 rounded-2xl border border-border bg-card overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&auto=format"
              alt="Circuit board technology"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-25 transition-opacity duration-700"
            />
            <div className="relative z-10 p-10 flex flex-col justify-between h-full min-h-[420px]">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-3 py-1 text-xs font-mono w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Now in public beta
              </div>
              <div>
                <h1
                  className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-none"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  Infrastructure<br />
                  <span className="text-primary italic">re-imagined.</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-md leading-relaxed mb-8">
                  Deploy anywhere, scale to anything. The platform that gets out of your way so you can build what matters.
                </p>
                <div className="flex items-center gap-3">
                  <button className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 text-sm">
                    Start building <ArrowRight size={16} />
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm border border-border rounded-xl px-5 py-3">
                    <Play size={14} className="fill-current" /> Watch demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Uptime Card */}
          <div className="md:col-span-4 row-span-1 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Uptime</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>99.99%</div>
              <p className="text-muted-foreground text-sm mt-1">Last 365 days · 26 min downtime</p>
            </div>
          </div>

          {/* Users Card */}
          <div className="md:col-span-2 row-span-1 rounded-2xl border border-border bg-primary p-6 flex flex-col justify-between">
            <Users size={20} className="text-primary-foreground/60" />
            <div>
              <div className="text-3xl font-bold text-primary-foreground" style={{ fontFamily: "'Fraunces', serif" }}>2.4M</div>
              <p className="text-primary-foreground/70 text-xs mt-1">Devs shipping</p>
            </div>
          </div>

          {/* Globe visual card */}
          <div className="md:col-span-2 row-span-1 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/30 transition-colors">
            <Globe size={20} className="text-primary" />
            <div>
              <div className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>200+</div>
              <p className="text-muted-foreground text-xs mt-1">Edge nodes</p>
            </div>
          </div>

          {/* Feature tabs card */}
          <div className="md:col-span-5 row-span-2 rounded-2xl border border-border bg-card p-7 flex flex-col">
            <div className="flex gap-2 mb-6">
              {features.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === i
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.title}
                </button>
              ))}
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {(() => {
                  const F = features[activeTab].icon;
                  return (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <F size={22} className="text-primary" />
                    </div>
                  );
                })()}
                <h3 className="text-xl font-semibold text-foreground mb-2">{features[activeTab].title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{features[activeTab].desc}</p>
              </div>
              <a href="#" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all mt-4">
                Learn more <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Quote / testimonial card */}
          <div className="md:col-span-3 row-span-2 rounded-2xl border border-border bg-secondary p-7 flex flex-col justify-between">
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-primary fill-primary" />
              ))}
            </div>
            <blockquote className="text-foreground text-base leading-relaxed flex-1" style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}>
              "{testimonials[0].text}"
            </blockquote>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-foreground text-sm font-medium">{testimonials[0].name}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{testimonials[0].role}</p>
            </div>
          </div>

          {/* Stats row */}
          {stats.map((stat, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`md:col-span-4 rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                hovered === i ? "border-primary/40 bg-primary/5" : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <BarChart3 size={16} className={`transition-colors ${hovered === i ? "text-primary" : "text-muted-foreground"}`} />
                <span className="text-xs font-mono text-muted-foreground">{stat.delta}</span>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>{stat.value}</div>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            </div>
          ))}

          {/* Image + caption card */}
          <div className="md:col-span-5 row-span-2 rounded-2xl border border-border overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=600&fit=crop&auto=format"
              alt="Developer working on laptop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">Case Study</span>
              <h3 className="text-foreground text-xl font-semibold mt-2" style={{ fontFamily: "'Fraunces', serif" }}>
                How Ruangguru scaled to 15M students
              </h3>
              <a href="#" className="inline-flex items-center gap-1 text-primary text-sm mt-3 hover:gap-2 transition-all">
                Read story <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Second testimonial */}
          <div className="md:col-span-4 row-span-2 rounded-2xl border border-border bg-card p-7 flex flex-col justify-between">
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-primary fill-primary" />
              ))}
            </div>
            <blockquote className="text-foreground text-base leading-relaxed flex-1" style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}>
              "{testimonials[1].text}"
            </blockquote>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-foreground text-sm font-medium">{testimonials[1].name}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{testimonials[1].role}</p>
            </div>
          </div>

          {/* CTA card */}
          <div className="md:col-span-3 row-span-2 rounded-2xl border border-primary/30 bg-primary/5 p-7 flex flex-col justify-between">
            <Sparkles size={24} className="text-primary" />
            <div>
              <h3 className="text-foreground text-2xl font-bold mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                Ready to ship faster?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Join 2.4M developers who build on Volta. Free tier available, no credit card required.
              </p>
              <button className="mt-6 w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2">
                Start for free <ArrowRight size={16} />
              </button>
            </div>
            <p className="text-muted-foreground text-xs">No credit card · Cancel anytime</p>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
              <Sparkles size={12} className="text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Volta Technologies, Inc.</span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">© 2024 — All systems operational</p>
        </footer>
      </main>
    </div>
  );
}
