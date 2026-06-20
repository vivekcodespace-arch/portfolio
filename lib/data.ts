export const profile = {
  name: "Vivek Sharma",
  role: "Full-Stack Developer",
  tagline: "Building AI-powered products with the modern web.",
  location: "Bhopal, India",
  email: "connect4vivek@gmail.com",
  phone: "+91-9279726893",
  bio: "I'm a Computer Science & Engineering (AI & ML) undergraduate at LNCT Bhopal, focused on building thoughtful full-stack products. I enjoy weaving AI into everyday tools, shipping clean interfaces, and solving real problems with the React / Next.js ecosystem.",
  education: {
    school: "Lakshmi Narain College of Technology (LNCT), Bhopal",
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    period: "2023 – 2027",
    cgpa: "8.47",
  },
  resumeUrl: "/Resume.pdf",
};

export const socials = {
  github: "https://github.com/",
  leetcode: "https://leetcode.com/",
  linkedin: "https://linkedin.com/in/",
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlight: string;
};

export const projects: Project[] = [
  {
    title: "AI Expense Tracker",
    description:
      "AI-powered web app that tracks, categorizes, and analyzes personal expenses in real-time. Uses Gemini to auto-classify spend and surface monthly insights.",
    tech: ["Next.js", "React", "Node.js", "Supabase", "Prisma", "Gemini API", "Tailwind CSS"],
    liveUrl: "https://github.com/",
    githubUrl: "https://github.com/",
    highlight: "AI categorization · real-time insights · secure auth",
  },
  {
    title: "SettleBalance",
    description:
      "Full-stack expense-splitting platform that manages and settles group expenses. Auto-computes balances and resolves who owes whom in a group.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Supabase"],
    liveUrl: "https://github.com/",
    githubUrl: "https://github.com/",
    highlight: "Groups · balance math · JWT auth",
  },
  {
    title: "UberClone",
    description:
      "Ride-booking web application enabling users to request and manage rides in real-time, with a clean booking flow and live ride status updates.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/",
    highlight: "Auth · booking workflow · real-time status",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript", "SQL"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { label: "Backend", items: ["Node.js", "Express.js", "Prisma ORM", "REST APIs"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "Supabase", "MySQL"] },
  { label: "Tools", items: ["Git", "GitHub", "Postman", "Vercel", "Firebase", "Docker"] },
];

export const achievements = [
  {
    label: "400+",
    detail: "Problems solved on LeetCode — Graphs, DP, Trees.",
  },
  {
    label: "Top 45",
    detail: "Smart India Hackathon — college-level finalist team.",
  },
  {
    label: "8.47 CGPA",
    detail: "B.Tech CSE (AI & ML) at LNCT Bhopal.",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
