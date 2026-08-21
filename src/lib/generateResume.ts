import { jsPDF } from "jspdf";
import {
  personalInfo,
  experiences,
  projects,
  skillGroups,
  education,
} from "@/data/resumeData";

const MARGIN = 18;
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const LINE_HEIGHT = 5;
const SECTION_GAP = 6;
const BLACK: [number, number, number] = [0, 0, 0];
const DARK: [number, number, number] = [40, 40, 40];
const GRAY: [number, number, number] = [100, 100, 100];
const MAX_Y = PAGE_HEIGHT - MARGIN;

function ensureSpace(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > MAX_Y) {
    doc.addPage();
    return MARGIN;
  }
  return y;
}

function sectionTitle(doc: jsPDF, y: number, title: string, minContentAfter = 20): number {
  const headerHeight = 10;
  y = ensureSpace(doc, y, headerHeight + minContentAfter);
  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...BLACK);
  doc.text(title.toUpperCase(), MARGIN, y);
  y += 1.5;
  doc.setDrawColor(180, 180, 180);
  doc.setLineWidth(0.2);
  doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);
  return y + 5;
}

export function generateResume() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  doc.setProperties({
    title: `${personalInfo.name} - Resume`,
    subject: personalInfo.title,
    author: personalInfo.name,
    keywords: skillGroups.flatMap((g) => g.skills).join(", "),
    creator: personalInfo.name,
  });

  let y = MARGIN;

  // === HEADER ===
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(...BLACK);
  doc.text(personalInfo.name, MARGIN, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...DARK);
  doc.text(personalInfo.title, MARGIN, y);
  y += 6;

  doc.setFontSize(9);
  doc.setTextColor(...DARK);
  const contactLine = `${personalInfo.email}  |  ${personalInfo.phone}  |  ${personalInfo.location}`;
  doc.text(contactLine, MARGIN, y);
  y += 4.5;

  doc.setTextColor(0, 0, 180);
  doc.textWithLink("LinkedIn Profile", MARGIN, y, { url: personalInfo.linkedin });
  const linkedinWidth = doc.getTextWidth("LinkedIn Profile");
  const separator = "  |  ";
  doc.setTextColor(...GRAY);
  doc.text(separator, MARGIN + linkedinWidth, y);
  const sepWidth = doc.getTextWidth(separator);
  doc.setTextColor(0, 0, 180);
  doc.textWithLink("Portfolio Website", MARGIN + linkedinWidth + sepWidth, y, { url: personalInfo.portfolio });
  y += 8;

  // === SUMMARY ===
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const summaryLines: string[] = doc.splitTextToSize(personalInfo.summary, CONTENT_WIDTH);
  const summaryHeight = summaryLines.length * LINE_HEIGHT;
  y = sectionTitle(doc, y, "Professional Summary", summaryHeight);
  doc.setTextColor(...DARK);
  doc.text(summaryLines, MARGIN, y);
  y += summaryHeight + 2;

  // === EXPERIENCE ===
  const calcExpHeight = (exp: typeof experiences[0]) => {
    let h = LINE_HEIGHT + LINE_HEIGHT + 1;
    doc.setFontSize(9);
    for (const task of exp.tasks) {
      h += doc.splitTextToSize(`- ${task}`, CONTENT_WIDTH - 4).length * LINE_HEIGHT;
    }
    h += SECTION_GAP;
    return h;
  };

  y = sectionTitle(doc, y, "Professional Experience", calcExpHeight(experiences[0]));

  for (const exp of experiences) {
    const expHeight = calcExpHeight(exp);
    y = ensureSpace(doc, y, expHeight);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...BLACK);
    doc.text(exp.title, MARGIN, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...GRAY);
    doc.text(exp.period, PAGE_WIDTH - MARGIN, y, { align: "right" });
    y += LINE_HEIGHT;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    doc.text(exp.company, MARGIN, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...GRAY);
    doc.text(exp.Location, PAGE_WIDTH - MARGIN, y, { align: "right" });
    y += LINE_HEIGHT + 1;

    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    for (const task of exp.tasks) {
      const lines = doc.splitTextToSize(`- ${task}`, CONTENT_WIDTH - 4);
      for (const line of lines) {
        doc.text(line, MARGIN + 2, y);
        y += LINE_HEIGHT;
      }
    }
    y += 2;
  }

  // === PROJECTS ===
  const calcProjHeight = (proj: typeof projects[0]) => {
    let h = LINE_HEIGHT + 1;
    doc.setFontSize(9);
    for (const point of proj.description) {
      h += doc.splitTextToSize(`- ${point}`, CONTENT_WIDTH - 4).length * LINE_HEIGHT;
    }
    h += SECTION_GAP;
    return h;
  };

  y = sectionTitle(doc, y, "Key Projects", calcProjHeight(projects[0]));

  for (const proj of projects) {
    const projHeight = calcProjHeight(proj);
    y = ensureSpace(doc, y, projHeight);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...BLACK);
    doc.text(proj.title, MARGIN, y);
    y += LINE_HEIGHT + 1;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    for (const point of proj.description) {
      const lines = doc.splitTextToSize(`- ${point}`, CONTENT_WIDTH - 4);
      for (const line of lines) {
        doc.text(line, MARGIN + 2, y);
        y += LINE_HEIGHT;
      }
    }
    y += 2;
  }

  // === SKILLS ===
  y = sectionTitle(doc, y, "Technical Skills", 40);

  for (const group of skillGroups) {
    const groupSkills = group.skills.join(", ");
    const skillLines = doc.splitTextToSize(groupSkills, CONTENT_WIDTH - 4);
    const groupHeight = LINE_HEIGHT + skillLines.length * LINE_HEIGHT + 2;

    y = ensureSpace(doc, y, groupHeight);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...BLACK);
    doc.text(group.title, MARGIN, y);
    y += LINE_HEIGHT;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(...DARK);
    for (const line of skillLines) {
      doc.text(line, MARGIN + 2, y);
      y += LINE_HEIGHT;
    }
    y += 2;
  }

  // === EDUCATION ===
  y = sectionTitle(doc, y, "Education", 20);

  for (const edu of education) {
    y = ensureSpace(doc, y, 12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...BLACK);
    doc.text(edu.degree, MARGIN, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...GRAY);
    doc.text(edu.period, PAGE_WIDTH - MARGIN, y, { align: "right" });
    y += LINE_HEIGHT;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...DARK);
    doc.text(edu.school, MARGIN, y);
    y += LINE_HEIGHT + 2;
  }

  doc.save("Mourya_Monavarty_Resume.pdf");
}
