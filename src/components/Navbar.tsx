import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
 
import { generateResume } from "@/lib/generateResume";

const links = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#", action: "resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = async (link: typeof links[0], e: React.MouseEvent) => {
    if (link.action === "resume") {
      e.preventDefault();
      const { generateResume } = await import("@/lib/generateResume");
      generateResume();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 border-b border-border">
      <div className="container flex items-center justify-between h-16 px-6">

        <motion.a
          href="#home"
          className="font-mono text-primary font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          MM<span className="animate-pulse-glow">_</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <motion.a
                href={link.href}
                onClick={(e) => handleClick(link, e)}
                className="relative text-sm text-muted-foreground font-mono py-1"
                whileHover={{ color: "hsl(174, 72%, 50%)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span>{link.label}</span>

                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>

      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-5">
              {links.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      handleClick(link, e);
                      setOpen(false);
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
