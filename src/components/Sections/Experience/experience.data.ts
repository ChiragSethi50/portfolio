import { LINKS } from "@/common/links";

export interface Experience {
  company: string;
  position: string;
  link: string;
  range: string;
  description?: string;
  details?: string[];
  closing?: string;
}

export const experienceData: Experience[] = [
  {
    company: "Zenmonk",
    position: "Full Stack Developer",
    link: LINKS.zenmonk,
    range: "February 2025 - Present",
    description:
      "As a Full Stack Developer, I contribute to the development and maintenance of production-level software solutions for FUNIBER's global educational platforms. My responsibilities include:",
    details: [
      "Writing and maintaining scalable, efficient, and clean production code.",
      "Developing frontend using Next.js with Backend For Frontend Architecture.",
      "Collaborating with backend teams to integrate APIs (Node.js/NestJS).",
      "Participating in system design discussions and applying best practices and design principles.",
      "Debugging, testing, and optimizing features for performance and security.",
      "Working closely with cross-functional teams to deliver solutions.",
    ],
    closing: "While my primary focus is frontend development, I actively contribute to backend development and have a strong understanding of full-stack workflows."
  },
  {
    company: "Zenmonk",
    position: "Full Stack Developer Intern",
    link: LINKS.zenmonk,
    range: "January 2024 - January 2025",
    description: "",
    details: [
      "Assisted in developing frontend features using Next.js.",
      "Worked on backend tasks with Node.js/NestJS.",
      "Participated in code reviews and team meetings.",
    ],
  },
];
