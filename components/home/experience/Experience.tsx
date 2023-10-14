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
    title: "The DataKirk",
    position: "Frontend Engineer",
    time: "2023 - Present",
    location: "Edinburgh, UK",
    description:
      "Senior Frontend Engineer for Datakirk Talent Matching Platform. Worked closely with a team of 4  to create new talent matching platform.",
    tech: ["React", "Material UI", "Typescript"],
  },
  {
    title: "Built Financial Technologies",
    position: "Frontend Engineer",
    time: "2022 - Present",
    location: "Accra, Ghana",
    description:
      "I played a pivotal role in transitioning our company's website from React to Next.js, which significantly improved its SEO performance. I helped introduced a new budgeting feature, making it effortless for users to create and manage budgets within the application.",
    tech: [
      "React",
      "Next",
      "Vue",
      "Material UI",
      "Vuetify",
    ],
  },
  {
    title: "Salcon Solutions",
    position: "Frontend Engineer",
    time: "2021 - present",
    location: "Glasgow, UK",
    description:
      "Worked as the lone frontend developer to build 2 different web applications(A school management system and a smart search engine to allow law firms search for legal cases)",
    tech: [
      "React",
      "Material UI",
      "Tailwind",
      "Vue3",
      "Next",
      "Nuxt",
    ],
  },
];
