export type ExperienceItem = {
  date: string;
  location: string;
  role: string;
  company: string;
  description?: string;
  tags?: string[];
};

export const experienceItems: ExperienceItem[] = [
{
    date: "2026",
    location: "Toronto",
    role: "Fullstack Software Developer",
    company: "KORE Solutions",
    description: "Expenses Team",
    tags: ["FastAPI", "RabbitMQ", "React"],
  },
  {
    date: "2025",
    location: "Toronto",
    role: "Engineering Intern",
    company: "Vivid Seats",
    description: "Distribution Team",
    tags: ["React", "JS/TS", "Postman"],
  },
  {
    date: "2025",
    location: "Ottawa",
    role: "QA Specialist",
    company: "Provance Technologies",
    description: "IT Service & Asset Management",
    tags: ["Azure DevOps", "Power Automate"],
  },
  {
    date: "2024",
    location: "Waterloo",
    role: "WE Accelerate Program",
    company: "UWaterloo",
    description: "Research for a healthcare chatbot",
    tags: ["Azure", "Cloud computing"],
  },
  {
    date: "2024",
    location: "Waterloo",
    role: "Illustrator",
    company: "UWaterloo",
    description: "Contractor for official campus illustration",
    tags: ["Clip Studio Paint", "Procreate"],
  },
  {
    date: "2022–2023",
    location: "Newmarket",
    role: "Math Instructor",
    company: "Mathnasium",
    description: "Taught kids how to math and bargain for fidget spinners",
    tags: ["Teaching"],
  },
];