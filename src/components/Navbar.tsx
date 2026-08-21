import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Radio, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Operations", href: "#experience" },
  { label: "Systems", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Credentials", href: "#education" },
  { label: "Resume", href: "#", action: "resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = async (link: (typeof links)[number], e: React.MouseEvent) => {
    if (link.action === "resume") {
      e.preventDefault();
      const { generateResume } = await import("@/lib/generateResume");
      generateResume();
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? "border-b border-primary/15 bg-background/90 shadow-[0_14px_40px_hsl(220_20%_4%_/_0.3)] backdrop-blur-xl"
          : "bg-background/45 backdrop-blur-md"
      }`}
      aria-label="Primary navigation"
    >
      <div className="container mx-auto flex h-[4.5rem] items-center justify-between px-5 sm:px-6">
        <motion.a
          href="#home"
          className="group flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-primary"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          <span className="rounded border border-primary/35 bg-primary/10 px-2 py-1">MM_</span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:inline">Reliability / QA</span>
        </motion.a>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-primary/80" aria-label="System status online">
            <Radio className="h-3.5 w-3.5 animate-pulse" />
            Online
          </div>
          <ul className="flex items-center gap-3">
            {links.map((link) => {
              const isResume = link.action === "resume";
              return (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleClick(link, e)}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-xs font-medium transition-colors ${
                      isResume
                        ? "border border-primary/35 bg-primary/10 text-primary hover:bg-primary/15"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {isResume ? <ArrowUpRight className="h-3.5 w-3.5" /> : null}
                    {!isResume && (
                      <span className="absolute inset-x-2 bottom-1 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                    )}
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </div>

        <motion.button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-md border border-border/70 p-2 text-foreground transition hover:border-primary/50 hover:text-primary lg:hidden"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-primary/10 bg-card/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container mx-auto flex flex-col gap-2 px-5 py-5 sm:px-6">
              {links.map((link, i) => {
                const isResume = link.action === "resume";
                return (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        handleClick(link, e);
                        setOpen(false);
                      }}
                      className={`flex items-center justify-between rounded-md px-3 py-3 text-sm transition ${
                        isResume
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                      }`}
                    >
                      {link.label}
                      {isResume ? <ArrowUpRight className="h-4 w-4" /> : null}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
