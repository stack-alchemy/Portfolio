export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Summer 2023",
    title: "Research Intern",
    company: "DeepMind",
    description: "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    advisor: "Peter Wang",
  },
  {
    date: "Summer 2022",
    title: "Research Intern",
    company: "Google Research",
    description: "Worked on improving robustness of large language models to distribution shifts",
    manager: "Elise Brown",
  },
];