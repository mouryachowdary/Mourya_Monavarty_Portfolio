import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, Github } from "lucide-react";
import { personalInfo } from "@/data/resumeData";

const contactItems = [
  {
    icon: Mail,
    label: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    isLink: true,
  },
  {
    icon: Phone,
    label: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    isLink: true,
  },
  {
    icon: MapPin,
    label: personalInfo.location,
    href: "https://www.google.com/maps/dir/17.8061312,83.3880064/Visakhapatnam",
    isLink: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn Profile",
    href: personalInfo.linkedin,
    isLink: true,
  },
  {
    icon: Github,
    label: "GitHub Profile",
    href: personalInfo.github,
    isLink: true,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 section-shell">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            &gt; contact.init()
          </p>

          <h2 className="text-4xl font-bold font-display mb-6 flex items-center justify-center gap-3">
            <Send className="w-8 h-8 text-primary icon-glow" />
            Get In Touch
          </h2>

          <p className="text-muted-foreground mb-10">
            Open to infrastructure, IT operations, and automation testing opportunities where measurable reliability, support quality, and test coverage matter.
          </p>

          <div className="space-y-4">
            {contactItems.map((item, i) => {
              const Wrapper = item.isLink ? motion.a : motion.div;

              return (
                <Wrapper
                  key={i}
                  {...(item.isLink
                    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 0 25px hsl(174 72% 50% / 0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-3 bg-card rounded-lg p-4 gradient-border card-hover-glow text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>

                  <span className="font-mono text-sm">{item.label}</span>
                </Wrapper>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-20 text-center text-muted-foreground text-xs font-mono">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
