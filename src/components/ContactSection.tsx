import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/resumeData";

const contactItems = [
  {
    icon: Mail,
    label: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: personalInfo.location,
    href: "https://www.google.com/maps/dir/17.8061312,83.3880064/Visakhapatnam",
  },
  {
    icon: Linkedin,
    label: "LinkedIn Profile",
    href: personalInfo.linkedin,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            &gt; contact.init()
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Get In Touch
          </h2>

          <p className="text-muted-foreground mb-10">
            I'm always open to new opportunities in infrastructure, networking, IT operations, and automation testing, where I can contribute and grow.
          </p>

          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-card rounded-lg p-4 border border-border text-foreground hover:text-primary hover:scale-[1.02] transition-all duration-200"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center text-muted-foreground text-xs font-mono">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
