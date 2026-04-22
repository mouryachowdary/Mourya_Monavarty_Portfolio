import jsPDF from "jspdf";
import {
  personalInfo,
  experiences,
  projects,
  skillGroups,
  education,
  howIWork,
} from "@/data/resumeData";

const MARGIN = 14;
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const LINE_HEIGHT = 4.2;
const SECTION_GAP = 2.5;
const BLACK: [number, number, number] = [0, 0, 0];
const DARK: [number, number, number] = [30, 30, 30];
const GRAY: [number, number, number] = [80, 80, 80];
const MAX_Y = PAGE_HEIGHT - MARGIN;
const EXPERIENCE_BULLET_LIMITS = [6, 5];
const PROJECT_BULLET_LIMIT = 1;

function ensureSpace(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > MAX_Y) {
    doc.addPage();
    return MARGIN;
  }
  return y;
}

// minContentAfter: minimum mm of content that must fit after the header on the same page
function sectionTitle(doc: jsPDF, y: number, title: string, minContentAfter = 25): number {
  const headerHeight = 6.5;
  y = ensureSpace(doc, y, headerHeight + minContentAfter);
  y += 1.5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...BLACK);
  doc.text(title.toUpperCase(), MARGIN, y);
  y += 1.2;
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y);
  return y + 3.5;
}

export function buildResumeDocument() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const resumeExperiences = experiences.map((exp, index) => ({
    ...exp,
    tasks: exp.tasks.slice(0, EXPERIENCE_BULLET_LIMITS[index] ?? 5),
  }));
  const resumeProjects = projects.map((project) => ({
    ...project,
    description: project.description.slice(0, PROJECT_BULLET_LIMIT),
  }));

  // ATS-critical: document metadata
  doc.setProperties({
    title: `${personalInfo.name} - Resume`,
    subject: personalInfo.title,
    author: personalInfo.name,
    keywords: skillGroups.flatMap((g) => g.skills).join(", "),
    creator: personalInfo.name,
  });

  let y = MARGIN;

  // === HEADER (Name + Title) ===
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(...BLACK);
  doc.text(personalInfo.name.toUpperCase(), MARGIN, y);
  y += 6.2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...DARK);
  doc.text(personalInfo.title, MARGIN, y);
  y += 5;

  // === CONTACT INFO (each on clear lines for ATS parsing) ===
  doc.setFontSize(8.5);
  doc.setTextColor(...GRAY);
  const contactLine = `${personalInfo.email}  |  ${personalInfo.phone}  |  ${personalInfo.location}`;
  doc.text(contactLine, MARGIN, y);
  y += 4;
  // LinkedIn as clickable link
  doc.setTextColor(0, 0, 180);
  doc.textWithLink(personalInfo.linkedin, MARGIN, y, {
    url: personalInfo.linkedin,
  });
  // GitHub and portfolio links on the same line
  const linkedinWidth = doc.getTextWidth(personalInfo.linkedin);
  const separator = "  |  ";
  doc.setTextColor(...GRAY);
  doc.text(separator, MARGIN + linkedinWidth, y);
  const sepWidth = doc.getTextWidth(separator);
  doc.setTextColor(0, 0, 180);
  doc.textWithLink(personalInfo.github, MARGIN + linkedinWidth + sepWidth, y, {
    url: personalInfo.github,
  });
  const githubWidth = doc.getTextWidth(personalInfo.github);
  doc.setTextColor(...GRAY);
  doc.text(separator, MARGIN + linkedinWidth + sepWidth + githubWidth, y);
  const secondSepWidth = doc.getTextWidth(separator);
  doc.setTextColor(0, 0, 180);
  doc.textWithLink(personalInfo.portfolio, MARGIN + linkedinWidth + sepWidth + githubWidth + secondSepWidth, y, {
    url: personalInfo.portfolio,
  });
  doc.setTextColor(...DARK);
  y += 4.5;

  // === PROFESSIONAL SUMMARY (keep together) ===
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const summaryLines: string[] = doc.splitTextToSize(personalInfo.summary, CONTENT_WIDTH);
  const summaryHeight = summaryLines.length * LINE_HEIGHT + 2;
  y = sectionTitle(doc, y, "Professional Summary", summaryHeight);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...DARK);
  doc.text(summaryLines, MARGIN, y);
  y += summaryHeight;

  // === PROFESSIONAL EXPERIENCE (keep each entry together) ===
  // Pre-calculate the first experience height for the section header
  const calcExpHeight = (exp: typeof resumeExperiences[0]) => {
    let h = LINE_HEIGHT + LINE_HEIGHT + 1; // title + company lines
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    for (const task of exp.tasks) {
      h += doc.splitTextToSize(`- ${task}`, CONTENT_WIDTH - 4).length * LINE_HEIGHT;
    }
    doc.setFont("helvetica", "italic");
    doc.setFontSize(7.5);
    h += doc.splitTextToSize(`Key Skills: ${exp.tags.join(", ")}`, CONTENT_WIDTH - 2).length * LINE_HEIGHT;
    h += SECTION_GAP;
    return h;
  };

  y = sectionTitle(doc, y, "Professional Experience", calcExpHeight(resumeExperiences[0]));

  for (const exp of resumeExperiences) {
    const expHeight = calcExpHeight(exp);
    y = ensureSpace(doc, y, expHeight);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...BLACK);
    doc.text(exp.title, MARGIN, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...GRAY);
    doc.text(exp.period, PAGE_WIDTH - MARGIN, y, { align: "right" });
    y += LINE_HEIGHT;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...DARK);
    doc.text(`${exp.company}, ${exp.Location}`, MARGIN, y);
    y += LINE_HEIGHT + 0.6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...DARK);
    for (const task of exp.tasks) {
      const lines = doc.splitTextToSize(`- ${task}`, CONTENT_WIDTH - 4);
      for (const line of lines) {
        doc.text(line, MARGIN + 2, y);
        y += LINE_HEIGHT;
      }
    }

    doc.setFont("helvetica", "italic");
    doc.setFontSize(7.5);
    doc.setTextColor(...GRAY);
    const skillsLine = `Key Skills: ${exp.tags.join(", ")}`;
    const skillLines = doc.splitTextToSize(skillsLine, CONTENT_WIDTH - 2);
    for (const line of skillLines) {
      doc.text(line, MARGIN + 2, y);
      y += LINE_HEIGHT;
    }
    y += SECTION_GAP;
  }

  // === PROJECTS (keep each project together) ===
  const calcProjHeight = (proj: typeof resumeProjects[0]) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    let h = doc.splitTextToSize(proj.title, CONTENT_WIDTH).length * LINE_HEIGHT;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    for (const point of proj.description) {
      h += doc.splitTextToSize(`- ${point}`, CONTENT_WIDTH - 4).length * LINE_HEIGHT;
    }
    doc.setFont("helvetica", "italic");
    doc.setFontSize(7.5);
    h += doc.splitTextToSize(`Technologies: ${proj.tags.join(", ")}`, CONTENT_WIDTH - 2).length * LINE_HEIGHT;
    h += SECTION_GAP;
    return h;
  };

  y = sectionTitle(doc, y, "Projects", calcProjHeight(resumeProjects[0]));

  for (const proj of resumeProjects) {
    const projHeight = calcProjHeight(proj);
    y = ensureSpace(doc, y, projHeight);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...BLACK);
    const titleLines = doc.splitTextToSize(proj.title, CONTENT_WIDTH);
    doc.text(titleLines, MARGIN, y);
    y += titleLines.length * LINE_HEIGHT;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...DARK);
    for (const point of proj.description) {
      const lines = doc.splitTextToSize(`- ${point}`, CONTENT_WIDTH - 4);
      for (const line of lines) {
        doc.text(line, MARGIN + 2, y);
        y += LINE_HEIGHT;
      }
    }

    doc.setFont("helvetica", "italic");
    doc.setFontSize(7.5);
    doc.setTextColor(...GRAY);
    const tagLine = `Technologies: ${proj.tags.join(", ")}`;
    const tagLines = doc.splitTextToSize(tagLine, CONTENT_WIDTH - 2);
    for (const line of tagLines) {
      doc.text(line, MARGIN + 2, y);
      y += LINE_HEIGHT;
    }
    y += SECTION_GAP;
  }

  // === TECHNICAL SKILLS (3-column bullet layout) ===
  const COL_COUNT = 4;
  const COL_WIDTH = (CONTENT_WIDTH - 8) / COL_COUNT;
  const colX = Array.from({ length: COL_COUNT }, (_, index) => MARGIN + 3 + COL_WIDTH * index);

  const calcGroupHeight = (group: typeof skillGroups[0]) => {
    const rows = Math.ceil(group.skills.length / COL_COUNT);
    return LINE_HEIGHT + rows * LINE_HEIGHT + SECTION_GAP;
  };

  y = sectionTitle(doc, y, "Technical Skills", calcGroupHeight(skillGroups[0]));

  for (const group of skillGroups) {
    const groupHeight = calcGroupHeight(group);
    y = ensureSpace(doc, y, groupHeight);

    // Category title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(...BLACK);
    doc.text(group.title, MARGIN, y);
    y += LINE_HEIGHT;

    // 3-column skills
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...DARK);
    const rows = Math.ceil(group.skills.length / COL_COUNT);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < COL_COUNT; c++) {
        const idx = r * COL_COUNT + c;
        if (idx < group.skills.length) {
          doc.text(`- ${group.skills[idx]}`, colX[c], y);
        }
      }
      y += LINE_HEIGHT;
    }
    y += SECTION_GAP;
  }

  // === EDUCATION (keep full section together) ===
  const eduHeight = education.length * (LINE_HEIGHT + LINE_HEIGHT + 3);
  y = sectionTitle(doc, y, "Education", eduHeight);

  for (const edu of education) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...BLACK);
    doc.text(edu.degree, MARGIN, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...GRAY);
    doc.text(edu.period, PAGE_WIDTH - MARGIN, y, { align: "right" });
    y += LINE_HEIGHT;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...DARK);
    doc.text(edu.school, MARGIN, y);
    y += LINE_HEIGHT + 2;
  }

  return doc;
}

export function generateResume() {
  const doc = buildResumeDocument();
  doc.save("Mourya_Monavarty_Resume.pdf");
}
