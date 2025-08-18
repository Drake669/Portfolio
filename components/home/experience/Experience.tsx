import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Kwame AI",
    position: "FullStack Developer",
    time: "2024 - Present",
    location: "Accra, Ghana",
    description:
      "At Kwame AI, I develop and maintain several core features, including a real-time legal drafting tool and a WhatsApp-integrated quiz system. I work across the stack using Node.js, Express, React, and Tailwind, and collarborate closely with design and AI teams to deliver smooth user experiences",
    tech: ["Next", "NodeJS", "Express", "MongoDB", "GCP", "Azure OpenAI"],
  },
  {
    title: "Built Financial Technologies",
    position: "Frontend Engineer",
    time: "2022 - Present",
    location: "Accra, Ghana",
    description:
      "I played a key role in transitioning our company’s website from React to Next.js, which greatly enhanced SEO and overall performance. At Built Financial Technologies, I contribute to both infrastructure improvements and internal tools, while also maintaining and developing new features for the core software as well as other Built applications such as POS and Payroll. Additionally, I introduced a new budgeting feature that makes it simple for users to create and manage budgets within the application.",
    tech: ["React", "Next", "Vue", "Material UI", "Vuetify"],
  },
  {
    title: "The DataKirk",
    position: "Frontend Engineer",
    time: "2023 - 2024",
    location: "Edinburgh, UK",
    description:
      "Senior Frontend Engineer for Datakirk Talent Matching Platform. Worked closely with a team of 4  to create new talent matching platform.",
    tech: ["React", "Material UI", "Typescript"],
  },
  {
    title: "Salcon Solutions",
    position: "Frontend Engineer",
    time: "2021 - 2024",
    location: "Glasgow, UK",
    description:
      "Worked as the lone frontend developer to build 2 different web applications(A school management system and a smart search engine to allow law firms search for legal cases)",
    tech: ["React", "Material UI", "Tailwind", "Vue3", "Next", "Nuxt"],
  },
];
