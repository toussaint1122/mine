import { useState, useEffect } from "react";
import {
  Moon, Sun, Menu, X, User, GraduationCap, Briefcase, Folder, Mail, Phone, Github
} from "lucide-react";

export default function Home({ dark, onToggleDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About", Icon: User },
    { href: "#skills", label: "Skills", Icon: GraduationCap },
    { href: "#exp", label: "Experience", Icon: Briefcase },
    { href: "#projects", label: "Projects", Icon: Folder },
    { href: "#contact", label: "Contact", Icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-background/60 backdrop-blur-sm"
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/60 flex-shrink-0">
              <img src="/profile.jpg" alt="Toussaint" className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-medium text-muted-foreground">Software developer</p>
              <h1 className="text-sm font-bold text-primary tracking-tight">MUGISHA Toussaint</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label, Icon }) => (
              <a key={href} href={href}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={onToggleDark}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
              aria-label="Toggle dark mode">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground"
              aria-label="Menu">
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            {navLinks.map(({ href, label, Icon }) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted/60 transition-colors border-b border-border/50 last:border-0">
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
      <section id="about" className="max-w-6xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Hello there 👋</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Hi, I'm a<br />
            <span className="text-primary">software developer.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            I build products that make people's lives easier. My focus is on web applications and developer tools.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm passionate about sharing knowledge and helping others grow in coding. On my YouTube channel, I teach programming step by step — clear, practical, and beginner-friendly.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "See my work", href: "#projects", primary: true },
              { label: "Get in touch", href: "#contact", primary: false },
              { label: "Hire me", href: "#contact", primary: true },
              { label: "Subscribe", href: "https://youtube.com", primary: false },
            ].map(({ label, href, primary }) => (
              <a key={label} href={href}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all hover:-translate-y-0.5 ${
                  primary
                    ? "bg-primary text-primary-foreground border-primary hover:opacity-90"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/40 ring-offset-4 ring-offset-background shadow-2xl">
              <img src="/profile.jpg" alt="MUGISHA Toussaint" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground text-xs font-bold">✓</span>
            </div>
          </div>

          <div className="w-full border border-primary/40 rounded-xl p-5 bg-card">
            <h3 className="font-bold text-lg mb-3 text-primary">Quick facts</h3>
            {[
              "📍 Based in Kigali",
              "🎓 Studying at Future Focus",
              "⚡ Main focus: React, TypeScript, Node.js",
              "💼 Open to freelance work",
            ].map((fact) => (
              <p key={fact} className="text-muted-foreground text-sm py-1.5 border-b border-border/50 last:border-0">{fact}</p>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="bg-muted/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
              { title: "Backend", items: ["Node.js", "Express", "Prisma", "PostgreSQL"] },
              { title: "DevOps", items: ["Docker", "GitHub Actions", "Vercel", "AWS"] },
            ].map(({ title, items }) => (
              <div key={title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:scale-[1.02] transition-all duration-200 group">
                <h3 className="font-bold text-lg mb-4 group-hover:text-primary transition-colors">{title}</h3>
                {items.map((item) => (
                  <p key={item} className="text-muted-foreground text-sm py-1 hover:text-primary cursor-default transition-colors">{item}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="exp" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-4">
            {[
              {
                role: "Trainer",
                org: "Future Focus",
                desc: "Teaching web development fundamentals and modern JavaScript frameworks to aspiring developers.",
              },
              {
                role: "Software Developer",
                org: "Freelance",
                desc: "Building frontend web applications for clients across various industries.",
              },
            ].map(({ role, org, desc }) => (
              <div key={role}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 border border-border rounded-xl p-5 hover:border-primary/50 bg-card transition-all">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{role}</h3>
                  <p className="text-primary text-sm font-medium">{org}</p>
                </div>
                <p className="text-muted-foreground text-sm sm:max-w-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="bg-muted/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "MIC-Shopping Mall",
                desc: "Vacancies information and printable receipts for small businesses. Built to speed up checkout and keep records organized.",
                tags: ["Next.js", "Tailwind", "Supabase"],
              },
              {
                title: "SkillForge",
                desc: "An education platform offering accessible learning for many students. Focused on practical, future-ready skills with guided learning paths.",
                tags: ["Next.js", "TypeScript", "PostgreSQL"],
              },
              {
                title: "Running Project",
                desc: "A project currently in active development. Building and testing features with regular updates based on real-world needs.",
                tags: ["Next.js", "Tailwind", "TypeScript"],
                badge: "In Progress",
              },
            ].map(({ title, desc, tags, badge }) => (
              <div key={title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all flex flex-col">
                {badge && (
                  <span className="self-start mb-3 text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                    {badge}
                  </span>
                )}
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground mb-12 text-lg">We can work together.</p>
          <div className="max-w-lg space-y-5">
            {[
              { Icon: Mail, label: "EMAIL", value: "ishimwedidierk@Gmail.com", href: "mailto:ishimwedidierk@gmail.com" },
              { Icon: Phone, label: "PHONE", value: "+250 781 998 106", href: "tel:+250781998106" },
              { Icon: Github, label: "GITHUB", value: "toussaint1122", href: "https://github.com/toussaint1122" },
            ].map(({ Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 bg-card hover:bg-muted/50 transition-all group">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-primary group-hover:underline">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} <span className="text-primary font-semibold">@toussaint mugisha</span> — All rights reserved.</p>
      </footer>
    </div>
  );
}
