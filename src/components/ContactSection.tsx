import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Linkedin, Radio, ShieldCheck } from "lucide-react";
import { personalInfo } from "@/data/resumeData";

const contactItems = [
  { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}`, type: "Email channel" },
  { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone}`, type: "Direct line" },
  { icon: MapPin, label: personalInfo.location, href: "https://maps.app.goo.gl/Y4YrRbRWZad8oYxn7", type: "Base location" },
  { icon: Linkedin, label: "LinkedIn Profile", href: personalInfo.linkedin, type: "Professional network" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-shell border-t border-border/70 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.05] p-6 sm:p-10 lg:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-primary/60 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(hsl(174_72%_50%_/_0.06)_1px,transparent_1px),linear-gradient(90deg,hsl(174_72%_50%_/_0.06)_1px,transparent_1px)] [background-size:44px_44px] opacity-50" aria-hidden="true" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                <Radio className="h-4 w-4 animate-pulse" />
                Open channel / contact protocol
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Ready to initialize a conversation?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                I&apos;m open to opportunities in infrastructure, networking, IT operations, and test automation. Let&apos;s talk about the systems you&apos;re building.
              </p>
              <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary/80">
                <ShieldCheck className="h-4 w-4" />
                Secure communication preferred
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_hsl(174_72%_50%_/_0.24)] transition hover:-translate-y-1 hover:shadow-[0_0_34px_hsl(174_72%_50%_/_0.4)]"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactItems.map(({ icon: Icon, label, href, type }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="group flex min-h-28 flex-col justify-between rounded-2xl border border-border/80 bg-card/75 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">0{i + 1}</span>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-primary/70">{type}</p>
                    <span className="break-words font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">{label}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p className="font-mono">© 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono text-primary/70">Built for reliable systems and thoughtful automation.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
